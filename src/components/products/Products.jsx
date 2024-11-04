import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../../context/ProductContext";
import { SingleProduct } from "./productDetails/SingleProduct";
import { ProductSearch } from "./productService/ProductSearchBar";
import { Pagination } from "./productService/Pagination";

export const Products = () => {
  const { productsData, isLoading, currentPage, setCurrentPage, totalPages } = useContext(ProductContext);
  // console.log("productss", productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(productsData);
      return;
    }
    if (!productsData || productsData.length === 0) {
     setFilteredProducts([]);
     return
    }
    const results = productsData.filter((product) =>
      product?.productName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

  useEffect(() => {
    setFilteredProducts(productsData);
  }, [productsData]);
  // console.log("filteredProducts", filteredProducts);

  return (
    <section className="flex flex-col justify-center items-center gap-4 bg-zinc-200 pt-9">
      <ProductSearch onSearch={handleSearch} />
      <section className="flex flex-wrap justify-center items-center">
        {isLoading ? (
          <h1 className="font-bold">Loading...</h1>
        ) : filteredProducts.length === 0 ? (
          <h2 className="font-bold">No products found</h2>
        ) : (
          filteredProducts.map((product) => {
            return <SingleProduct products={product} key={product.productId} />;
          })
        )}
      </section>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};
