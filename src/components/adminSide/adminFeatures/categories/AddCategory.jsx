import React, { useState } from 'react'
import { Box, Button, TextField } from "@mui/material";

import { addCategoryService } from '../../../../APIservice/CategoryService';

export const AddCategory = () => { 
  const [categoryName, setCategoryName] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryName.trim() === "") return;

    try {
      const newCategory = await addCategoryService({ categoryName: categoryName });
      console.log("New Category Created:", newCategory);
      setCategoryName("");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <section>
      <h1 className="text-center mt-5 font-bold text-red-900">
        Add a new category
      </h1>
      <Box
        component="form"
        className="flex flex-col w-80 mx-auto mt-9 gap-5"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="outlined-required"
          label="Category Name:"
          value={categoryName}
          onChange={handleChange}
        />
        <Button variant="outlined" type="submit">
          Create
        </Button>
      </Box>
    </section>
  );
};

