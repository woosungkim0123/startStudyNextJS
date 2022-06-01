import NavBar from "./NavBar";
import Seo from "./Seo";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const obj = { "/": "Home", about: "About" };
  const router = useRouter();
  return (
    <>
      <Seo title={obj[router.pathname]} />
      <NavBar />
      <div>{children}</div>
    </>
  );
}

/* children은 react.js가 제공하는 prop인데 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 때 쓸 수 있다. */
