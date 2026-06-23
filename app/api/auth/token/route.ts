export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  try {
    const response = await fetch(
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

    const data = await response.json();

    const idToken = data.id_token;

    const payload = JSON.parse(
      Buffer.from(idToken.split(".")[1], "base64").toString()
    );

    return Response.json({
      logged_in: true,
      email: payload.email,
      email_verified: payload.email_verified,
      customer_id: payload.sub,
      access_token: data.access_token,
    });
  } catch (e: any) {
    return Response.json({
      error: true,
      message: e?.message,
    });
  }
}