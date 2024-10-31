import React, { useEffect, useState } from 'react'
import { ProductName } from './ProductName';
import { Image } from './Image';
import { Price } from './Price';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { Quantity } from './Quantity';
import { CategoryName } from './CategoryName';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../../service/ServiceProduct';

export const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

     useEffect(() => {
       const fetchProduct = async () => {
         const response = await getSingleProduct(id);
         setProduct(response.data);
       };
       fetchProduct();
     }, [id]);
     console.log("hh",product)

     if (!product) return <p>Loading...</p>;

    return (
      <section key={product.id} className="flex items-center justify-center gap-7 m-5 h-96 ">
        <Image Image={product.image} Title={product.productName} />
        <div>
          <ProductName ProductName={product.productName} />
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
          <CategoryName CategoryName={product.categoryName} />
        </div>
      </section>
    );
}