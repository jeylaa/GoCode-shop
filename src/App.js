import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [initCategories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setProducts(data);
      });
  }, []);

  const categories = initCategories
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const handleChange = (e) => {
    if (e.target.value === "all") {
      setProducts(products);
    } else {
      const filterProducts = initCategories.filter(
        (product) => product.category === e.target.value
      );
      setProducts(filterProducts);
    }
  };

  return (
    <div>
      <Header categories={categories} handleChange={handleChange} />
      <Products products={products} />
    </div>
  );
}

export default App;
