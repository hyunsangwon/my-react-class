import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [inputs, setInputs] = useState({
    Title: '',
    Year: '',
    Type: '',
  });
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

  const inputOnChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const create = () => {
    console.log(inputs);
    setInputs({
      Title: '',
      Year: '',
      Type: '',
    });
  };
  return (
    <div>
      <h3>movie</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.Title}</li>
        ))}
      </ul>
      <div>
        <input type="text" name="Title" onChange={inputOnChange} placeholder="Title..." />
        <input type="text" name="Year" onChange={inputOnChange} placeholder="Year..." />
        <input type="text" name="Type" onChange={inputOnChange} placeholder="Type..." />
        <div>
          <button type="button" onClick={() => create()}>
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
