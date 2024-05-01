import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit, RatelimitConfig } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const config: RatelimitConfig = {
  redis: kv,
  limiter: Ratelimit.slidingWindow(5, "60s"),
};

const rateLimit = new Ratelimit(config);

export async function GET(req: NextRequest) {
  const ip = req.ip ?? "127.0.0.1";

  const { limit, reset, remaining } = await rateLimit.limit(ip);

  if (remaining == 0) {
    return NextResponse.json({
      error: "Rate limit exceeded. Please try again later.",
      status: 429,
      headers: {
        "X-RateLimit-Limit": limit.toString(),
        "X-RateLimit-Remaining": remaining.toString(),
        "X-RateLimit-Reset": reset.toString(),
      },
    });
  } else {
    const query = req.nextUrl.searchParams.get("query");

    const res = await axios({
      method: "get",
      url: process.env.AZURE_FUNCTION_URL,
      params: {
        code: process.env.AZURE_FUNCTION_NEXT_APP_CODE_PARAM,
        query: query,
      },
    });

    if (res.status == 200) {
      return NextResponse.json({ message: res.data });
    } else if (res.status >= 500) {
      return NextResponse.json({
        message: "Internal Server Error",
        error: res.data,
      });
    }
    //
  }
}
