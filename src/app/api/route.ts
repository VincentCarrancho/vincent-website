import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
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
