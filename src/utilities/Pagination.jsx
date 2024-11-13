import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";

import { ProductContext } from "../context/ProductContext";

export const PaginationComponent = () => {
  const {
    totalPages,
    pageNumber,
    setPageNumber,
  } = useContext(ProductContext);

  const handleChange = (event, value) => {
    setPageNumber(value);
    console.log("value", value);
  };

  return (
    <>
      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        sx={{ marginTop: 3, marginBottom: 5}}
      />
    </>
  );
};
