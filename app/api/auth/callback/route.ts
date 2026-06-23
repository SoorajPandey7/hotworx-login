import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response(`
    <html>
      <body>
        <script>
          setTimeout(() => {
            window.location.href = "https://test-next-day-nutra-hotworx.myshopify.com/";
          }, 2000);
        </script>
        Logging in...
      </body>
    </html>
  `, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}