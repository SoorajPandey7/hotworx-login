import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
  const customerResponse = await fetch(
    `https://${process.env.SHOPIFY_STORE}/admin/api/2025-04/customers/search.json?query=email:${encodeURIComponent(email)}`,
    {
      headers: {
        "X-Shopify-Access-Token":
          process.env.SHOPIFY_ADMIN_TOKEN!,
        "Content-Type": "application/json",
      },
    }
  );

  const text = await customerResponse.text();

  return Response.json({
    email,
    shop: process.env.SHOPIFY_STORE,
    status: customerResponse.status,
    response: text,
  });

} catch (e: any) {
  return Response.json({
    error: true,
    message: e.message,
    shop: process.env.SHOPIFY_STORE,
  });
} catch (error: any) {
    return Response.json({
      error: true,
      message: error.message,
    });
  }
}