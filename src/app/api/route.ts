import { NextRequest, NextResponse } from "next/server";
import { formatDocumentsAsString } from "langchain/util/document";
import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";

import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(3, "10s"),
});

export async function GET(req: NextRequest) {
  const ip = req.ip ?? "127.0.0.1";

  const { limit, remaining, reset } = await ratelimit.limit(ip);

  if (remaining == 0) {
    return NextResponse.json({
      data: {
        message: "Error: Rate limit exceeded",
      },
      headers: {
        "x-ratelimit-limit": limit,
        "x-ratelimit-remaining": remaining,
        "x-ratelimit-reset": reset,
      },
      status: 429,
    });
  }

  const query = req.nextUrl.searchParams.get("query");

  if (!query || query === "") {
    return NextResponse.json({
      error: "Query parameter is required.",
      status: 400,
    });
  }

  const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
  const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
  const PINECONE_INDEX = process.env.PINECONE_INDEX;
  const CURRENT_DATE = new Date().toISOString();

  const pinecone = new Pinecone({
    apiKey: PINECONE_API_KEY!,
  });
  const pineconeIndex = pinecone.Index(PINECONE_INDEX ?? "personal-website");

  const embeddings = new OpenAIEmbeddings({
    apiKey: OPEN_AI_API_KEY,
  });

  const vectorstore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeConfig: {
      indexName: PINECONE_INDEX!,
      config: {
        apiKey: PINECONE_API_KEY!,
      },
    },
  });

  const llm = new ChatOpenAI({
    apiKey: OPEN_AI_API_KEY,
    temperature: 1,
    model: "gpt-4-turbo",
  });

  const RAG_PROMPT = `
    Current date: ${CURRENT_DATE}

    Here is the following information about someone you'll be acting as. His name is Vincent. Treat this as if someone wants to learn about him professionally. ALWAYS USE THE INFORMATION BELOW. If you are unsure about the answer, deflect. Also you only answer questions. Avoid followup questions.
     
    {context}

    ALWAYS EMPHASIZE WORK EXPERIENCE and PROFESSIONAL EXPERIENCE. Try to prioritize telling projects after 2022 as those projects are quite more advanced, interesting, and complete. Try to not mention any projects before 2022 unless asked–such as the flutter one and/or the iPad OS one.

    Here are things that I am not:
    - He is not an AI Enthusiast even though I worked on AI projects.
    - He is not a Flutter Developer even though I worked on a Flutter project.
    - He is Full Stack Developer

    ALWAYS answer as if you are him. THIS IS REALLY IMPORTANT. Remember to be polite and super casual. 

    Question: {question}
    `;

  const prompt = PromptTemplate.fromTemplate(RAG_PROMPT);
  const retriever = vectorstore.asRetriever({
    searchType: "mmr",
    k: 5,
  });

  const relavant_docs = await vectorstore.maxMarginalRelevanceSearch(query!, {
    k: 4,
    fetchK: 20,
  });

  const rag_chain = RunnableSequence.from([
    {
      context: retriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    llm,
  ]);

  let finalResponse = null;

  await rag_chain
    .invoke(query)
    .then((response) => {
      finalResponse = response.content;
    })
    .catch((error) => {
      return NextResponse.json({
        message: "Internal Server Error",
        error: error,
      });
    });

  return NextResponse.json({
    data: {
      message: finalResponse,
    },
    status: 200,
  });
}
