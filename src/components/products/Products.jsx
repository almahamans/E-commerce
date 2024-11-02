import React, { useContext, useState } from 'react'

import { ProductContext } from '../../context/ProductContext';
import { SingleProduct } from './productDetails/SingleProduct';

export const Products = () => {
    const { productsData } = useContext(ProductContext);
    // console.log("productss", productsData);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = productsData.filter((product) => {
        if (product?.productName) {
            return product.productName.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
    });
    // console.log("filtredData", filteredData);

    return (
      <section className="flex flex-col justify-center items-center gap-4 bg-zinc-200 pt-9">
        <section>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search for a product"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="border-2 border-green-700 p-2 min-w-96"
          />
        </section>
        <section className="flex flex-wrap justify-center items-center">
        {   
          filteredData.map(product => {
            return <SingleProduct products={product} key={product.productId} />;
          }) 
        }
        </section>
      </section>
    );
}
