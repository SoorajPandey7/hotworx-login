import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const code = url.searchParams.get("code");

  return new Response(
    `LOGIN SUCCESS<br><br>CODE: ${code}`,
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}