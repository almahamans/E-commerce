import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Title } from "../../Title";
import { Image } from "../../Image";
import { Price } from "./Price";
import { CreatedAt } from "./CreatedAt";
import { Description } from "./Description";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../../APIservice/ServiceProduct";
import { CartContext } from "../../../context/CartContext";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { AddToCart } = useContext(CartContext);

  const fetchProduct = async () => {
    const response = await getSingleProduct(id);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1>loading...</h1>;
  }
  return (
    <section
      key={product.id}
      className="flex items-center justify-center gap-9 m-5 h-96 "
    >
      <div>
        <Image Image={product.image} Title={product.productName} />
      </div>
      <div className="flex flex-col gap-3">
        <Title Name={product.productName} />
        <div>
          <Price Price={product.price} />
        </div>
        <CreatedAt CreateAt={product.createAt} />
        <div className="flex flex-nowrap gap-2">
          <Description Description={product.description} />
        </div>
        <button
          onClick={() => AddToCart(product)}
          className="text-white bg-black px-9 py-2"
        >
          Add to cart
        </button>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </section>
  );
};
