import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

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
      message: "Rate limit exceeded",
      limit,
      remaining,
    });
  }

  return NextResponse.json({
    message: "Hello World",
  });
}
