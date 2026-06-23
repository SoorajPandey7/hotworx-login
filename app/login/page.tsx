export default function LoginPage() {
  const loginUrl =
    "https://shopify.com/authentication/100596318496/oauth/authorize" +
    "?client_id=777015f3-c7ba-435b-a6c9-e95c84bd5953" +
    "&redirect_uri=https%3A%2F%2Fhotworx-login.vercel.app%2Fapi%2Fauth%2Fcallback" +
    "&response_type=code" +
    "&scope=openid%20email";

  return (
    <div style={{ padding: "50px" }}>
      <h1>Login</h1>

      <a href={loginUrl}>
        <button>Login with Shopify</button>
      </a>
    </div>
  );
}