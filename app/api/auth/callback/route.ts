import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://test-next-day-nutra-hotworx.myshopify.com/account"
  );
}