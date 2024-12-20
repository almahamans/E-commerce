import React, { useContext } from 'react'

import { CategoryContext } from '../../context/CategoryContext';
import { Category } from './Category';

export const Categories = () => {
    const { categoriesData } = useContext(CategoryContext);

    return (
      <section className="flex flex-col flex-wrap gap-5 justify-center items-center my-14">
        {categoriesData && categoriesData.length > 0 ? (
          categoriesData.map((category) => {
            return <Category info={category} key={category.categoryId} />;
          })
        ) : (
          <h1>No data to show</h1>
        )}
      </section>
    );
}
