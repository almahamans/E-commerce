import React, { useContext, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { ProductContext } from '../../../context/ProductContext';

export const SortProducts = () => {
  const { setSortBy, sortBy, setSortOrder, sortOrder } = useContext(ProductContext);

const handleSortByChange = (event) => {
  setSortBy(event.target.value || "CreatedAt");
};

const handleSortOrderChange = (event) => {
  setSortOrder(event.target.value || "asc");
};

    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="sortByInputLabel">Sort By:</InputLabel>
          <Select
            labelId="sortByInputLabel"
            id="sortByInput"
            value={sortBy}
            label="SortBy"
            onChange={handleSortByChange}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value={"Price"}>Price</MenuItem>
            <MenuItem value={"CreatedAt"}>Date</MenuItem>
          </Select>
          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="sortOrderInputlabel">Sort Order:</InputLabel>
          <Select
            labelId="sortOrderInputlabel"
            id="sortOrderInput"
            value={sortOrder}
            label="SortOrder"
            onChange={handleSortOrderChange}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value={"asc"}>Ascending</MenuItem>
            <MenuItem value={"desc"}>Descending</MenuItem>
          </Select>
          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
      </div>
    );
};
