import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movie.css';
import MovieItem from './MovieItem';

const Movie = () => {
  const [movie, setMovie] = useState([]);

  const connectionBackend = async () => {
    //axios : 백엔드 연동 도와주는 라이브러리
    const result = await axios({
      method: 'get',
      url: 'https://33144asrdh.execute-api.ap-northeast-2.amazonaws.com/example',
    });
    console.log('백엔드로 가져온 데이터는? ');
    console.log(result.data);
    setMovie(result.data);
  };

  useEffect(() => {
    connectionBackend(); //백엔드 연결 함수 호출
  }, []); //[] : 컴포넌트가 실행될 때 *한번만* 실행한다.

  return (
    <div>
      <div className="site-title">
        <h2>MOVIES</h2>
      </div>
      <div className="container">
        {/* MovieItem 컴포넌트 호출해서 
         props로 영화제목, 상영년도, 이미지 넘겨주기
        */}
        {movie.map((item, key) => (
          <MovieItem
            key={key}
            title={item.Title}
            year={item.Year}
            poster={item.Poster}
          ></MovieItem>
        ))}
      </div>
    </div>
  );
};

export default Movie;
