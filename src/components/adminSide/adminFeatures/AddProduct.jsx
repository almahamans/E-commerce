import React, { useContext, useState } from 'react'

import { addProductService } from '../../../APIservice/ServiceProduct'
import { CategoryContext } from '../../../context/CategoryContext';

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

    // Validate input
    if (
      !newProduct.ProductName ||
      !newProduct.Price ||
      !newProduct.categoryId
    ) {
      setMessage("Please fill out all required fields.");
      return;
    }

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
    } catch (error) {
      setMessage("Error occurred while adding the product.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add New Product</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="ProductName" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            name="ProductName"
            id="ProductName"
            value={newProduct.ProductName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description:
          </label>
          <textarea
            name="Description"
            id="Description"
            value={newProduct.Description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            name="Price"
            id="Price"
            value={newProduct.Price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryId" className="form-label">
            Category:
          </label>
          <select
            name="categoryId"
            id="categoryId"
            value={newProduct.categoryId}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select a Category</option>
            {categoriesData.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Image" className="form-label">
            Image URL:
          </label>
          <input
            type="url"
            name="Image"
            id="Image"
            value={newProduct.Image}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Product
        </button>
      </form>
    </div>
  );
};
