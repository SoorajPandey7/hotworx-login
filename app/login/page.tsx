export default function LoginPage() {
  const loginUrl =
    "https://shopify.com/authentication/100596318496/oauth/authorize" +
    "?client_id=88420f56-41b8-419b-8169-ba8f9fba8371" +
    "&redirect_uri=https%3A%2F%2Fhotworx-login.vercel.app%2Fapi%2Fauth%2Fcallback" +
    "&response_type=code" +
    "&scope=openid+email";

  return (
    <div style={{ padding: "50px" }}>
      <h1>Login</h1>

      <a href={loginUrl}>
        <button>Login with Shopify</button>
      </a>
    </div>
  );
}