import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
// 더 많은 prop을 넣어서 head 컴포넌트를 개인화 할 수 있다. Meta Description, 작성자 등
