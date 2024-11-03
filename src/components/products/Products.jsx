import React, { useContext, useEffect, useState } from 'react'

import { ProductContext } from '../../context/ProductContext';
import { SingleProduct } from './productDetails/SingleProduct';
import { ProductSearch } from './ProductSearchBar';


export const Products = () => {
  const { productsData, isLoading } = useContext(ProductContext);
  // console.log("productss", productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const handleSearch = (searchTerm) => {
    if (!productsData || productsData.length === 0) {
      return "No products to display";
    }
    const results = productsData.filter(
      product => product?.productName?.toLowerCase().includes(searchTerm.toLowerCase())
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
        {
        isLoading ? 
        <h1 className='font-bold'>Loading...</h1> :
        filteredProducts.map((product) => {
          return <SingleProduct products={product} key={product.productId} />;
        })
        }
      </section>
    </section>
  );
}
