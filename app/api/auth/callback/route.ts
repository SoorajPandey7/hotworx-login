import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  console.log("Shopify Code:", code);

  return NextResponse.redirect(
    new URL("https://test-next-day-nutra-hotworx.myshopify.com/", "https://hotworx-login.vercel.app")
  );
}