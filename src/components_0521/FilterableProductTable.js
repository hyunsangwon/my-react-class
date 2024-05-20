import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  return (
    <div>
      <SearchBar></SearchBar>
      <ProductTable products={props.products}></ProductTable>
    </div>
  );
};

export default FilterableProductTable;
