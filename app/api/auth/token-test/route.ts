import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  return Response.json({
    token_exists: !!cookieStore.get("customer_access_token"),
    token: cookieStore.get("customer_access_token")?.value || null,
  });
}