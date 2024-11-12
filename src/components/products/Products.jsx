import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../../context/ProductContext";
import { SingleProduct } from "./productDetails/SingleProduct";
import { PaginationComponent } from "../../utilities/Pagination";
import { SearchBar } from "../../utilities/SearchBar";
import { SortFeature } from "../../utilities/SortFeature";
import { getAllProducts } from "../../APIservice/ServiceProduct";


export const Products = () => {
  const { searchTerm, pageNumber, pageSize, sortBy, sortOrder } = useContext(ProductContext);
  const [productsData, setProductsData] = useState([]);
  console.log("productsData", productsData);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts(
        searchTerm,
        pageNumber,
        pageSize,
        sortBy,
        sortOrder
      );
      setProductsData(response.data.data.items);
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchProducts()
  }, [])

  return (
    <section className="flex flex-col justify-center items-center gap-4 bg-zinc-200 pt-9">
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
