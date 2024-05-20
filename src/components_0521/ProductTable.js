import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const rows = [];
  let lastCategory = null;

  // Loop through each product that is passed from our props and to the product.
  props.products.forEach((product) => {
    // If the product's category is not equal to the lastCategory, then we will add a new category row using our ProductCategoryRow component.
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    // We pass to that component the category and use the category as a key
    rows.push(<ProductRow product={product} key={product.name} />);
    // Set the lastCategory to the current product's Category.

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
