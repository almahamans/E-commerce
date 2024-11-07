import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { ProductContext } from '../../context/ProductContext';
import { GetProductsByCategoryId } from '../../APIservice/ServiceProduct';
import { SingleProduct } from './productDetails/SingleProduct';

export const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [productdata, setproductdata] = useState(null)
  console.log("categoryIdddddddd", categoryId);

  const fetchProducts = async () => {
    const response = await GetProductsByCategoryId(categoryId);
    setproductdata(response.data[0].products);
    console.log("componentttt",response.data)
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

    if (!productdata) {
      return <h1>loading...</h1>;
    }
    return (
      <section className="flex flex-wrap justify-center items-center">
        {productdata && productdata.length > 0 ? (
          productdata.map((product) => {
            return <SingleProduct products={product} key={product.productId} />;
          })
        ) : (
          <h1 className="font-bold">No products found</h1>
        )}
      </section>
    );
}