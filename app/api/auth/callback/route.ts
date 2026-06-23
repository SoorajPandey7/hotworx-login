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

  return new Response(
  `
  <html>
    <body style="font-family:Arial;padding:40px">
      <h1>Login Success</h1>

      <p>Customer authenticated successfully.</p>

      <a
        href="https://test-next-day-nutra-hotworx.myshopify.com/"
        style="
          padding:12px 20px;
          background:#000;
          color:#fff;
          text-decoration:none;
          border-radius:6px;
        "
      >
        Continue To Store
      </a>
    </body>
  </html>
  `,
  {
    headers: {
      "Content-Type": "text/html",
    },
  }
);
}