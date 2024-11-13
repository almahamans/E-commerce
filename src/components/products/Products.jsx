import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../../context/ProductContext";
import { SingleProduct } from "./productDetails/SingleProduct";
import { PaginationComponent } from "../../utilities/Pagination";
import { SearchBar } from "../../utilities/SearchBar";
import { SortFeature } from "../../utilities/SortFeature";


export const Products = () => {
  const { fetchProducts, productsData } = useContext(ProductContext);

  useEffect(()=>{
    fetchProducts()
  }, [])

  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-9">
      <div className="flex gap-2">
        <SearchBar />
        <SortFeature />
      </div>
      <section className="flex flex-wrap justify-center items-center">
        {productsData && productsData.length > 0 ? (
          productsData.map((product) => {
            return <SingleProduct products={product} key={product.productId} />;
          })
        ) : (
          <h1 className="font-bold">No products found</h1>
        )}
      </section>
      <PaginationComponent />
    </section>
  );
};
