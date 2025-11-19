import React from "react";
import useFetch from "./custom-Hook/useFetch";

const Home = () => {
  const { product } = useFetch("https://fakestoreapi.com/products");

  return (
    <>
      Home
      {product.length}
    </>
  );
};

export default Home;
