import React, { useEffect, useState } from "react";

import { Title } from "../../Title";
import { Image } from "../../Image";
import { Price } from "./Price";
import { CreatedAt } from "./CreatedAt";
import { Description } from "./Description";
import { Quantity } from "./Quantity";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../../APIservice/ServiceProduct";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const response = await getSingleProduct(id);
    setProduct(response.data);
    // console.log(response.data)
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1>loading...</h1>;
  }
  //  console.log("peoduct details",product)
  return (
    <section
      key={product.id}
      className="flex items-center justify-center gap-7 m-5 h-96 "
    >
      <Image Image={product.image} Title={product.productName} />
      <div>
        <Title Name={product.productName} />
        <div className="flex flex-nowrap gap-2">
          <span>Price:</span>
          <Price Price={product.price} />
        </div>
        <CreatedAt CreateAt={product.createAt} />
        <div className="flex flex-nowrap gap-2">
          <span>Description:</span>
          <Description Description={product.description} />
        </div>

        <Quantity Quantity={product.quantity} />
      </div>
    </section>
  );
};
