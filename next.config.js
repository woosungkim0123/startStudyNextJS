/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/blog/:id*",
        destination: "/new-blog/:id*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;

/*
redirection이 permanent(영구적)인지 아닌지에 따라서
브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정됨

이런식도 가능
source: "/blog/:id",
destination: "/new-blog/:id",

만약 주소창에
source: "/blog/:id*",
destination: "/new-blog/:id*",

/blog/12321/comments/1231223 치면
/new-blog/12321/comments/1231223
뒤쪽은 그대로옴

redirect는  이 url로 갈때 url이 바뀌엇는지 유저가 알게됨

rewrites는 유저를 redirect를 시키지만 url은 변하지않음

유저가 api key를 보지못한다는 뜻

/api/movies 로 들어가보면 받아온 데이터들이 보이는데

우리 서버뒤에 mask되어 가려져있다



*/
