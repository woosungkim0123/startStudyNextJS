import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter(); // location에 대한 정보를 얻음 (hook)

  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About Us
        </a>
      </Link>
    </nav>
  );
}
