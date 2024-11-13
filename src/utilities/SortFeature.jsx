import React, { useContext } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { ProductContext } from '../context/ProductContext';

export const SortFeature = () => {
  const { sortBy, setSortBy, sortOrder, setSortOrder } = useContext(ProductContext);

const handleSortByChange = (event) => {
  setSortBy(event.target.value);
};

const handleSortOrderChange = (event) => {
  setSortOrder(event.target.value);
};

    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel id="sortByInputLabel">Sort By:</InputLabel>
          <Select
            labelId="sortByInputLabel"
            id="sort-by-id"
            value={sortBy}
            label="Sort By"
            onChange={handleSortByChange}
          >
            <MenuItem value="Price">Price</MenuItem>
            <MenuItem value="CreatedAt">Date</MenuItem>
          </Select>
          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="sortOrderInputlabel">Sort Order:</InputLabel>
          <Select
            labelId="sortOrderInputlabel"
            id="sort-order-id"
            value={sortOrder}
            label="Sort Order"
            onChange={handleSortOrderChange}
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
      </div>
    );
};
