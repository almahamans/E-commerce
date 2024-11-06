import React, { useContext } from 'react'

import { Title } from '../Title';
import { CategoryContext } from '../../context/CategoryContext';

export const Categories = () => {
    const { categoriesData } = useContext(CategoryContext);

    return (
      <section className="text-center border box-border m-5 w-64 h-80">
        {
            categoriesData.map(category => {
                return;
            })
        }
        
       

        {/* <button className="border-2 px-3 rounded-lg border-gray-700 text-sm mb-2">
          Show Details
        </button> */}
      </section>
    );
}
