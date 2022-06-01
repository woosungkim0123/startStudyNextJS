import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

/*
많이 쓰는 패턴인데

우리는 너무 큰 _app.js 파일을 원하지않는다
이 파일에는 많은것을 import 해야함
global, google analytics, 검색엔진, 스크립트 분석
그래서 Layout 컴포넌트를 만듬
*/
