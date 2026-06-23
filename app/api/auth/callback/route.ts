import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.redirect(
    new URL("https://test-next-day-nutra-hotworx.myshopify.com/?customer_login=1")
  );
}