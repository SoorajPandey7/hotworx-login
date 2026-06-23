import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "50px" }}>
      <h1>Hotworx Login Test</h1>

      <Link href="/login">
        Go To Login
      </Link>
    </main>
  );
}