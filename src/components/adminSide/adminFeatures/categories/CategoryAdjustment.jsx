import React, { useEffect, useState } from 'react'

import { deleteCategoryService, getSingleCategoryService, updateCategoryService } from '../../../../APIservice/CategoryService';

export const CategoryAdjustment = ({ id }) => {
  const [category, setCategory] = useState({
    categoryName: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const fetchProduct = async () => {
    try {
      const response = await getSingleCategoryService(id);
      console.log(response);
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setMessage("Failed to fetch product.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!category) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteCategoryService(id);
        setMessage("Product deleted successfully.");
        // navigate("/admin/display-products");
      } catch (error) {
        console.error("Error deleting product:", error);
        setMessage("Failed to delete product.");
      }
    }
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await updateCategoryService(id, category);
      if (response) {
        setMessage("Product updated successfully.");
        setIsEditing(false);
        console.log(response);
      } else {
        setMessage("Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage("Error occurred while updating the product.");
    }
  };

  setTimeout(() => {
    setMessage("");
  }, 1500);



  return (
    <section className="m-3 w-72 bg-white ">
      <section className="flex flex-col items-center justify-center gap-5 border-pink-900 border">
        <>
          {isEditing ? (
            <section className="grid grid-rows-2 grid-cols-2  gap-2">
              <input
                type="text"
                name="categoryName"
                value={category.categoryName}
                onChange={handleInputChange}
                className="border-2 col-span-2 p-1 mt-2"
              />
              <button onClick={handleSave} className="">
                Save
              </button>
              <button onClick={handleEditToggle} className="">
                Cancel
              </button>
            </section>
          ) : (
            <section className="flex flex-col justify-center items-center gap-2 flex-wrap">
              <h2 className="">{category.categoryName}</h2>
              <section className="grid grid-cols-2 grid-rows-1 gap-3 my-3">
                <button
                  onClick={handleEditToggle}
                  className="border-2 border-grey-900 rounded p-1 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="border-2 border-red-900 rounded p-1 text-sm"
                >
                  Delete
                </button>
              </section>
            </section>
          )}
        </>
      </section>
      {message && <p className="text-center text-green-800">{message}</p>}
    </section>
  );
}
