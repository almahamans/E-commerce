import React, { useContext } from 'react'

import { CategoryContext } from '../../context/CategoryContext';
import { Category } from './Category';

export const Categories = () => {
    const { categoriesData } = useContext(CategoryContext);

    return (
      <section className="flex flex gap-5 justify-center items-center flex-wrap">
        {
            categoriesData.map(category => {
                return <Category info={category} key={category.catgoryId}/>;
            })
        }

        {/* <button className="border-2 px-3 rounded-lg border-gray-700 text-sm mb-2">
          Show Details
        </button> */}
      </section>
    );
}
