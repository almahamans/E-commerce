import React, { useContext } from 'react'

import { PaginationComponent } from '../../../../utilities/Pagination';
import { CategoryAdjustment } from './CategoryAdjustment';
import { CategoryContext } from '../../../../context/CategoryContext';

export const DisplayCategories = () => {
  const { categoriesData } = useContext(CategoryContext);
  console.log("categoriesData", categoriesData);

  return (
    <section className="flex flex-col justify-center items-center gap-4 bg-zinc-200 pt-9">
      <h1 className="text-red-900 font-bold">Categories management</h1>
      <section className="flex flex-wrap justify-center items-center">
        {categoriesData &&
          categoriesData.map((category) => {
            return (
              <CategoryAdjustment
                key={category.categoryId}
                id={category.categoryId}
              />
            );
          })}
      </section>
      <PaginationComponent />
    </section>
  );
}
