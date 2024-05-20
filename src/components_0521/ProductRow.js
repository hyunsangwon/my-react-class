import React from 'react';

const ProductRow = (props) => {
  const product = props.product;

  return (
    <tr>
      <td>
        <span style={{ color: 'red' }}>{product.name}</span>
      </td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
