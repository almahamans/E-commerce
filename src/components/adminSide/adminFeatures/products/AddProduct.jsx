import React, { useContext, useState } from 'react'

import { addProductService } from '../../../../APIservice/ServiceProduct'
import { CategoryContext } from '../../../../context/CategoryContext';

export const AddProduct = () => {
  const { categoriesData } = useContext(CategoryContext)

  const [newProduct, setNewProduct] = useState({
    ProductName: "",
    Description: "",
    Price: "",
    categoryId: "",
    Image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const response = await addProductService(newProduct);

    if (response.success) {
      setMessage("Product added successfully!");
      setNewProduct({
        ProductName: "",
        Description: "",
        Price: "",
        categoryId: "",
        Image: "",
      })
    } else {
      setMessage("Failed to add product.");
    }
    }catch (error){
      setMessage("Error occurred while adding the product.");
    }

    setTimeout(() => {
      setMessage("");
    }, 1500);
  }

  return (
    <div className="flex flex-col justify-center items-center mb-12">
      <h1 className="my-5 text-red-900 font-bold">Add New Product</h1>
      <form onSubmit={handleSubmit} className='grid grid-rows-6 grid-cols-2'>
          <label htmlFor="ProductName">
            Product Name:
          </label>
          <input
            type="text"
            name="ProductName"
            id="ProductName"
            value={newProduct.ProductName}
            onChange={handleChange}
            className="border"
            required
          />
          <label htmlFor="Description">
            Product Description:
          </label>
          <textarea
            name="Description"
            id="Description"
            value={newProduct.Description}
            onChange={handleChange}
            className="border"
          />
          <label htmlFor="Price">
            Product Price:
          </label>
          <input
            type="number"
            name="Price"
            id="Price"
            value={newProduct.Price}
            onChange={handleChange}
            className="border"
            required
          />
          <label htmlFor="categoryId">
            Product Category:
          </label>
          <select
            name="categoryId"
            id="categoryId"
            value={newProduct.categoryId}
            onChange={handleChange}
            className="border"
            required
          >
            <option value="">Select a Category</option>
            {categoriesData.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryName}
              </option>
            ))}
          </select>

          <label htmlFor="Image">
            Image URL:
          </label>
          <input
            type="url"
            name="Image"
            id="Image"
            value={newProduct.Image}
            onChange={handleChange}
            className="border"
          />

        <button type="submit" className="border rounded bg-gray-200 col-span-2 max-h-9 mt-3">
          Add The Product
        </button>
      </form>
      {message && <p className='text-center text-green-800'>{message}</p>}
    </div>
  );
};
