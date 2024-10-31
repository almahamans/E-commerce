import React from 'react'
import { ProductName } from './ProductName'
import { Image } from './Image'
import { useNavigate } from 'react-router-dom'

export const SingleProduct = ({ products }) => {
    const { productName, price, createAt, image, description, quantity, categoryName } = products;
    const navigate = useNavigate();
    // console.log("single", products)
    const handleDetailsClick = () => {
      navigate(`/product-details/${products.productId}`);
    };
    return (
      <section className="flex flex-col gap-7 justify-center items-center border box-border m-5 w-80 h-96 bg-white">
        <ProductName ProductName={productName} />
        <Image Image={image} Title={productName} />
        <button onClick={handleDetailsClick}>Show Details</button>
      </section>
    );
}
