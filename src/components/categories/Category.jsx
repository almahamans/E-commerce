import React from 'react'
import { Link } from 'react-router-dom';

import { Title } from "../Title";

export const Category = ({info}) => {
  // console.log("info",info)
    return (
      <div className="border box-border m-5 w-64 h-80 text-center">
        <Title Name={info.categoryName} />
        <Link to={`/category-products/${info.categoryId}`}>See more</Link>
      </div>
    );
}
