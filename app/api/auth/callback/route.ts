import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");

    if (!code) {
      return new Response("Missing code", {
        status: 400,
      });
    }

    // Exchange code for token
    const tokenResponse = await fetch(
      "https://shopify.com/authentication/100596318496/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id:
            "777015f3-c7ba-435b-a6c9-e95c84bd5953",
          code,
          redirect_uri:
            "https://hotworx-login.vercel.app/api/auth/callback",
        }),
      }
    );

    const data = await tokenResponse.json();

    if (!data.id_token) {
      return Response.json(data);
    }

    // Decode ID token
    const payload = JSON.parse(
      Buffer.from(
        data.id_token.split(".")[1],
        "base64"
      ).toString()
    );

    const email = payload.email;

    let customerType = "existing";

    // Search customer by email
    const customerResponse = await fetch(
      `https://${process.env.SHOPIFY_STORE}/admin/api/2025-04/customers/search.json?query=email:${encodeURIComponent(
        email
      )}`,
      {
        headers: {
          "X-Shopify-Access-Token":
            process.env.SHOPIFY_ADMIN_TOKEN!,
          "Content-Type":
            "application/json",
        },
      }
    );

    const customerData =
      await customerResponse.json();

    const customer =
      customerData?.customers?.[0];

    const tags =
      customer?.tags || "";

    const isNewCustomer =
      tags.includes("new_customer") ||
      tags.includes("first_time_signup");

    if (isNewCustomer) {
  customerType = "new";
}

return Response.json({
  email,
  customerType,
  tags,
});
  } catch (error: any) {
    return Response.json({
      error: true,
      message: error.message,
    });
  }
}