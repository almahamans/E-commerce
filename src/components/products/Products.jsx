import React, { useContext } from 'react'

import { ProductContext } from '../../context/ProductContext';
import { SingleProduct } from './productDetails/SingleProduct';

export const Products = () => {
    const { productsData } = useContext(ProductContext);
    console.log("productss", productsData)
    return(
        <section className="flex flex-wrap justify-center items-center gap-4 bg-zinc-200 pt-9">
        {
            productsData && productsData.length > 0 ? (productsData.map((product) => {
                return  <SingleProduct products={product} key={product.productId}/>
            })) : (
                <h1>error</h1>
            )
        }
        </section>
    )
}
