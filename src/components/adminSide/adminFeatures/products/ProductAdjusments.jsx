import React, { useContext, useEffect, useState } from 'react'

import { getSingleProduct, deleteProductService, updateProductService } from "../../../../APIservice/ServiceProduct";
import { CategoryContext } from "../../../../context/CategoryContext";

export const ProductAdjustments = ({ id }) => {
  const { categoriesData } = useContext(CategoryContext);

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    image: "",
    categoryId: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const fetchProduct = async () => {
    try {
      const response = await getSingleProduct(id);
      console.log(response)
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error)
      setMessage("Failed to fetch product.")
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProductService(id);
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
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await updateProductService(id, product);
      if (!response) {
        setMessage("Product updated successfully.");
        setIsEditing(false);
        console.log(response)
      } else {
        setMessage("Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage("Error occurred while updating the product.");
    }
  };
  // console.log("products in adjusments",product)

  return (
    <section className="m-3 w-72 bg-white min-h-96">
      <section className="flex flex-col items-center justify-center gap-5 ">
        <img
          src={product.image}
          alt={product.productName}
          className="w-32 h-32"
        />
        <>
          {isEditing ? (
            <section className="grid grid-rows-6 gap-2">
              <input
                type="text"
                name="productName"
                value={product.productName}
                onChange={handleInputChange}
                className="border"
              />
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                className="border"
              />
              <textarea
                name="description"
                value={product.description}
                onChange={handleInputChange}
                className="border"
              />
              <select
                name="categoryId"
                value={product.categoryId}
                onChange={handleInputChange}
                className="border"
              >
                {categoriesData.map((category) => (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
              <section className="grid grid-cols-2 grid-rows-1 gap-3">
                <button onClick={handleSave} className="">
                  Save
                </button>
                <button onClick={handleEditToggle} className="">
                  Cancel
                </button>
              </section>
            </section>
          ) : (
            <section className="flex flex-col justify-center items-center gap-2 flex-wrap">
              <h2 className="">{product.productName}</h2>
              <p className="">
                Price: {product.price} <strong className="text-xs">SAR</strong>
              </p>
              <p className="text-center">Description: {product.description}</p>
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
      {message && <p>{message}</p>}
    </section>
  );
}
