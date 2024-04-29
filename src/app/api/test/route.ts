import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query");

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(5000);

  return NextResponse.json({ message: "query" });
}
