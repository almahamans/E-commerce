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
      console.error("Error fetching product:", error);
      setMessage("Failed to fetch product.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
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

  

  console.log("products in adjusments",product)

  return (
    <section className="flex flex-col justify-center items-center border box-border m-5 w-80 h-80 bg-white">
      <section className="flex items-center justify-center gap-7 m-5 h-96">
        <img
          src={product.image}
          alt={product.productName}
          className="w-32 h-32"
        />
        <div>
          {isEditing ? (
            <>
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
              <button onClick={handleSave} className="btn btn-primary">
                Save
              </button>
              <button onClick={handleEditToggle} className="btn btn-secondary">
                Cancel
              </button>
            </>
          ) : (
            <>
              <h2>{product.productName}</h2>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
              <button onClick={handleEditToggle} className="btn btn-primary">
                Edit
              </button>
              <button onClick={handleDelete} className="btn btn-danger">
                Delete
              </button>
            </>
          )}
        </div>
      </section>
      {message && <p>{message}</p>}
    </section>
  );
};
