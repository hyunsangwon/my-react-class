import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';
import SearchResultsList from './SearchResultList';

const Search = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return user.name.toLowerCase().includes(value);
        });
        setResults(results);
      });
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Type to search..." value={input} onChange={handleChange} />
      </div>
      {results && results.length > 0 && <SearchResultsList results={results} />}
    </div>
  );
};

export default Search;
