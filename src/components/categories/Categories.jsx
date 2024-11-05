import React, { useContext } from 'react'

import { Title } from '../Title';
import { CategoryContext } from '../../context/CategoryContext';
import { Image } from '../Image';

export const Categories = () => {
    const { categoriesData } = useContext(CategoryContext);

    return (
      <section className="flex flex-col gap-5 justify-center items-center border box-border m-5 w-64 h-80 bg-white">
        {
            categoriesData.map(category => {
                return <Title Name={category.categoryName} />;
            })
        }
        
        {/* <Image Image={image} Title={productName} /> */}

        <button className="border-2 px-3 rounded-lg border-gray-700 text-sm mb-2">
          Show Details
        </button>
      </section>
    );
}
