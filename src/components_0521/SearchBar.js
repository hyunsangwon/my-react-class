import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" /> Only show products in stock
      </p>
    </div>
  );
};

export default SearchBar;
