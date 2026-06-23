export async function GET(request: Request) {
  const url = new URL(request.url);

  const code = url.searchParams.get("code");

  return new Response(
    JSON.stringify(
      {
        code,
        message: "Code received successfully",
      },
      null,
      2
    ),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}