import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query");

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(5000);

  return NextResponse.json({
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deleniti quam iste soluta illum, sunt saepe at placeat nihil eum natus ipsam optio libero ut quas expedita iure nulla velit! Dignissimos possimus corrupti nulla illum, eius repellat sapiente deleniti! Quae aliquam praesentium neque voluptatum perferendis minima expedita nostrum accusamus sint deserunt, dolore culpa quos fuga exercitationem. Natus iste ullam maxime officia accusamus architecto non perspiciatis nobis eaque corporis sunt dolorum atque, dolorem inventore rerum veritatis cumque id aspernatur delectus quos, deserunt odio sit dignissimos. Beatae et autem, tempore rerum atque ipsa maxime consequatur architecto ab quas, recusandae excepturi sed enim.",
  });
}
