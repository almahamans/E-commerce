import React, { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";
import { SingleProduct } from "./productDetails/SingleProduct";
import { ProductSearch } from "./productFeatures/ProductSearchBar";
import { PaginationComponent } from "./productFeatures/Pagination";
import { SortProducts } from "./productFeatures/SortProducts";

export const Products = () => {
  const { productsData } = useContext(ProductContext);

  return (
    <section className="flex flex-col justify-center items-center gap-4 bg-zinc-200 pt-9">
      <ProductSearch />
      <SortProducts  />
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
