import React from 'react'
import { ProductName } from './ProductName'
import { Image } from './Image'
import { Link, useNavigate } from 'react-router-dom'

export const SingleProduct = ({ products }) => {
    const { productName, image } = products;
    const navigate = useNavigate();
    // console.log("single", products)
    const handleDetailsClick = () => {
      navigate(`/product-details/${products.productId}`) 
    }
  
    return (
      <section className="flex flex-col gap-5 justify-center items-center border box-border m-5 w-64 h-80 bg-white">
        <ProductName ProductName={productName} />
        <Image Image={image} Title={productName} />
        <button
          onClick={handleDetailsClick}
          className="border-2 px-3 rounded-lg border-gray-700 text-sm mb-2"
        >
          Show Details
        </button>
      </section>
    );
}
