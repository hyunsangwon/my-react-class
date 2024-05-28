import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await axios({
      method: 'get',
      url: 'http://localhost:3000/movies',
    });
    setMovies(res.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h3>movie</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
