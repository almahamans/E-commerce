import React from 'react'
import { Link } from 'react-router-dom';

import { Title } from "../Title";

export const Category = ({info}) => {
  // console.log("info",info)
    return (
      <div className="rounded border-2 border-pink-900 box-border w-56 h-20 text-center ">
        <Title Name={info.categoryName} />
        <Link to={`/customer/category-products/${info.categoryId}`} className='text-sm'>See more</Link>
      </div>
    );
}
