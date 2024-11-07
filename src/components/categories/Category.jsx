import React from 'react'
import { Link } from 'react-router-dom';

import { Title } from "../Title";

export const Category = ({info}) => {
    return (
      <div className="border box-border m-5 w-64 h-80 text-center">
        <Title Name={info.categoryName} />
        <Link to="/list-products">See more</Link>
      </div>
    );
}
