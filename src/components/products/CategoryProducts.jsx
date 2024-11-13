import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { GetProductsByCategoryId } from '../../APIservice/ServiceProduct';
import { SingleProduct } from './productDetails/SingleProduct';

export const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [productdata, setproductdata] = useState(null)

  const fetchProducts = async () => {
    const response = await GetProductsByCategoryId(categoryId);
    setproductdata(response.data[0].products);      
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

    return (
      <section className=" flex flex-col justify-center items-center">
        <section className="flex flex-wrap justify-center items-center">
          {productdata && productdata.length > 0 ? (
            productdata.map((product) => {
              return (
                <SingleProduct products={product} key={product.productId} />
              );
            })
          ) : (
            <h1 className="font-bold">No products found</h1>
          )}
        </section>
      </section>
    );
}
