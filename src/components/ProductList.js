import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";
import { products } from "../data/products";

import en from "../lang/en.json";
import tr from "../lang/tr.json";

const ProductList = () => {
  const [productList, setProductList] = useState(products);
  const [sortOption, setSortOption] = useState("price");
  const [currentLang, setCurrentLang] = useState("en");

  const deleteProduct = (id) => {
    const updatedList = productList.filter((product) => product.id !== id);
    setProductList(updatedList);
  };

  const addProduct = (newProduct) => {
    setProductList([...productList, newProduct]);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleLangChange = (e) => {
    setCurrentLang(e.target.value);
  };

  const sortedProducts = [...productList];
  sortedProducts.sort((a, b) => {
    if (sortOption === "price") {
      return a.price - b.price;
    } else if (sortOption === "popularity") {
      return Math.random() - 0.5;
    } else if (sortOption === "date") {
      return a.dateAdded - b.dateAdded;
    }
    return 0;
  });

  const lang = currentLang === "en" ? en : tr;

  return (
    <div>
      <h1>{lang.productListTitle}</h1>
      <div>
        <label htmlFor="lang">Dil / Language:</label>
        <select id="lang" value={currentLang} onChange={handleLangChange}>
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
        </select>
      </div>
      <div>
        <label htmlFor="sort">{lang.sortLabel}</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="price">{lang.priceOption}</option>
          <option value="popularity">{lang.popularityOption}</option>
          <option value="date">{lang.dateOption}</option>
        </select>
      </div>
      <ul>
        {sortedProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={deleteProduct}
            lang={lang}
          />
        ))}
      </ul>
      <ProductForm onAddProduct={addProduct} lang={lang} />
    </div>
  );
};

export default ProductList;
