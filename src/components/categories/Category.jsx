import React from 'react'
import { Image } from '../Image';
import { Title } from '../Title';

export const Category = () => {
    return (
      <section>
        <Title Name={category.categoryName} />
        <Image Image={image} Title={productName} />
      </section>
    );
}
