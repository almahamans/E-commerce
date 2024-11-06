import React from 'react'

import { Title } from "../Title";

export const Category = ({info}) => {
    return (
      <div className="border box-border m-5 w-64 h-80 text-center">
        <Title Name={info.categoryName} />
      </div>
    );
}
