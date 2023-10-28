import React, { useState } from "react";

const ProductForm = ({ onAddProduct, lang }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      const newProduct = {
        id: Date.now(),
        name,
        price: parseFloat(price),
      };
      onAddProduct(newProduct);
      setName("");
      setPrice("");
    }
  };

  return (
    <div>
      <h2>{lang.addProductTitle}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{lang.productNameLabel}</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="price">{lang.productPriceLabel}</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div>
          <button type="submit">{lang.addProductButton}</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
