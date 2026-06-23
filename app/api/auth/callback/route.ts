export async function GET(request: Request) {
  const url = new URL(request.url);

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  return new Response(
    `
    <html>
      <body style="font-family:Arial;padding:40px">
        <h1>LOGIN SUCCESS</h1>

        <h3>Code</h3>
        <pre>${code}</pre>

        <h3>State</h3>
        <pre>${state}</pre>

        <h3>All Params</h3>
        <pre>${JSON.stringify(
          Object.fromEntries(url.searchParams.entries()),
          null,
          2
        )}</pre>
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