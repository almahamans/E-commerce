import React, { useContext, useState } from 'react'

import { ProductContext } from '../../../context/ProductContext';

export const SortProducts = ({ onSortOrderChange}) => {
  const { setSortOrder, sortOrder } = useContext(ProductContext);
  const [sortBy, setSortBy] = useState("");

  const handleSorting = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    setSortBy(value);
  }

    return (
      <div>
        <h1>Sort By:</h1>
        <select onChange={handleSorting} value={sortOrder}>
          <option value="" disabled>
            <span>Select an Order</span>
          </option>
          <option value="price">Price</option>
          <option value="date">date</option>
        </select>
        <h1>Sort Order:</h1>
        <select onChange={handleSorting} value={sortOrder}>
          <option value="" disabled>
            <span>Select an Order</span>
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    );
};
