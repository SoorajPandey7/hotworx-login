import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const tokenResponse = await fetch(
    "https://shopify.com/authentication/100596318496/oauth/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "777015f3-c7ba-435b-a6c9-e95c84bd5953",
        code: code || "",
        redirect_uri:
          "https://hotworx-login.vercel.app/api/auth/callback",
      }),
    }
  );

  const data = await tokenResponse.json();

  const payload = JSON.parse(
    Buffer.from(data.id_token.split(".")[1], "base64").toString()
  );

  const email = payload.email;

  return NextResponse.redirect(
    `https://test-next-day-nutra-hotworx.myshopify.com/?logged_in=1&email=${encodeURIComponent(
      email
    )}`
  );
}