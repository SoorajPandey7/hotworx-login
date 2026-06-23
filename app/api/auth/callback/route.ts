import { cookies } from "next/headers";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const code = url.searchParams.get("code");

  return new Response(
    `
    <html>
      <body style="font-family:Arial;padding:40px">
        <h1>LOGIN SUCCESS</h1>

        <h3>Authorization Code</h3>
        <pre>${code}</pre>

        <button onclick="getToken()">Get Token</button>

        <pre id="result"></pre>

        <script>
          async function getToken() {
            const res = await fetch('/api/auth/token?code=${code}');
            const data = await res.text();

            document.getElementById('result').innerText = data;
          }
        </script>
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