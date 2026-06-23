export default function LoginPage() {
  const clientId = "88420f56-41b8-419b-8169-ba8f9fba8371";

  const loginUrl =
    "https://shopify.com/authentication/100596318496/oauth/authorize" +
    `?client_id=${clientId}` +
    `&redirect_uri=https://hotworx-login.vercel.app/api/auth/callback` +
    `&response_type=code`;

  return (
    <div style={{ padding: "50px" }}>
      <h1>Login</h1>

      <a href={loginUrl}>
        <button>Login with Shopify</button>
      </a>
    </div>
  );
}