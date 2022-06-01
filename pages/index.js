import { useEffect, useState } from "react";

export default function Home({ results }) {
  /*
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  jsx 내부
  {!movies && <h4>Loading...</h4>}
*/
  return (
    <div className="container">
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

/*

fake fetching url을 가지게 됨

멋진 function 선택권을 주는

우리 페이지가 오직 server side render만 할지 선택할 수 있게 해줌

로딩을 보고 싶어하지않는사람들도있음
그 사람들은 fetch라던지 server에서 일어나는 data관련 작업을 모두 한다음 
api가 모두 완료되었을때 비로소 페이지를 render해줫으면 좋겠다<- 이걸 선택하고싶어하는사람이있음

즉, 데이터가 들어온뒤에 렌더해줘 <-- 이걸 결정할 수 있음

get server side props라는것


이름이 매우 중요함
이자리에 어떤 코드를 쓰던지
그 코드는 서버에서 돌아가게됨
팁: rewrite를 안쓰고도 이방식으로 api키를 숨길 수 있음

_app.js에서 pageProps가 필요한이유

우리가 홈페이지로 갈떄
일어나는일은 next.js가 Home을 받아서 
컴포넌트 자리에 Home을 렌더링하고 
next.js가 getServerSideProps를 호출해서 return된 값을 pageProps에 넣어준다

*/

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  // props키를 가진 object를 리턴함
  return {
    props: {
      results,
    },
  };
}
