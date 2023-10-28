import React from "react";

const ProductItem = ({ product, onDelete, lang }) => {
  return (
    <li>
      <div>
        <strong>{product.name}</strong> - {product.price} TL
      </div>
      <div>
        <button onClick={() => onDelete(product.id)}>
          {lang.deleteButton}
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
