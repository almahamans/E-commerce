import React from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "../../Title";
import { Image } from "../../Image";
import { Price } from "./Price";
export const SingleProduct = ({ products }) => {
  const { productName, image, price } = products;
  const navigate = useNavigate();
  // console.log("single", products)
  const handleDetailsClick = () => {
    navigate(`/product-details/${products.productId}`);
  };

  return (
    <section className="flex flex-col justify-center items-center border box-border m-5 w-64 h-80 bg-white">
      <Title Name={productName} />
      <Image Image={image} Title={productName} />
      <Price Price={price} />
      <button
        onClick={handleDetailsClick}
        className="border-2 px-3 rounded-lg border-gray-700 text-sm mb-2"
      >
        Show Details
      </button>
    </section>
  );
};
