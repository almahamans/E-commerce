import React, { useContext } from 'react'

import { ProductContext } from '../../../../context/ProductContext';
import { PaginationComponent } from '../../../../utilities/Pagination';
import { ProductAdjustments } from './ProductAdjusments';

export const DisplayProducts = () => {
  const { productsData } = useContext(ProductContext);
  console.log("productsData", productsData);

  return (
    <section className="flex flex-col justify-center items-center gap-4 pt-9">
      <h1 className='text-red-900 font-bold'>Products management</h1>
      <section className="flex flex-wrap justify-center items-center">
        {productsData &&
          productsData.map((product) => {
            return (
              <ProductAdjustments
                key={product.productId}
                id={product.productId}
              />
            );
          })}
      </section>
      <PaginationComponent />
    </section>
  );
}
