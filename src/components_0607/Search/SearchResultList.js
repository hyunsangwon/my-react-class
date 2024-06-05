import React from 'react';

const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => (
        <div className="search-result" key={id} onClick={(e) => alert(`You selected ${result.name}!`)}>
          {result.name}
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
