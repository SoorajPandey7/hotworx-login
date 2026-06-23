export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const result: any = {
    received_code: code,
    timestamp: new Date().toISOString(),
  };

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

    result.status = response.status;
    result.statusText = response.statusText;

    const text = await response.text();

    result.response = text;

    return Response.json(result);
  } catch (e: any) {
    return Response.json({
      error: true,
      message: e?.message,
      stack: e?.stack,
    });
  }
}