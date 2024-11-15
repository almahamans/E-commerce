import React, { useState } from 'react'
import { Box, Button, TextField } from "@mui/material";

import { addCategoryService } from '../../../../APIservice/CategoryService';

export const AddCategory = () => { 
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryName.trim() === "") return;

    try {
      const newCategory = await addCategoryService({ categoryName: categoryName });
      setMessage("Category added successfully!");
      setCategoryName("");
    } catch (error) {
      setMessage("Failed to add category!");
    }

    setTimeout(() => {
      setMessage("");
    }, 1500);
  }

  return (
    <section className='mb-44'>
      <h1 className="text-center mt-5 font-bold text-red-900">
        Add Category
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
      {message && <p className="text-center text-green-800">{message}</p>}
    </section>
  );
};

