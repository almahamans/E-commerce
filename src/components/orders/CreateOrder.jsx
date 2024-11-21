import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';

import { createOrder } from '../../APIservice/OrderService';
import { CartContext } from '../../context/CartContext';

export const CreateOrder = () => {
  const userId = localStorage.getItem("userId");
  const { userCart } = useContext(CartContext);

  const [shippingAddress, setShippingAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const orderData = {
      userId,
      userCart,
    }

    try {
      const response = await createOrder(orderData);
      console.log("Order created successfully", response.data);
    } catch (err) {
      setError("There was an error creating your order.");
      console.error("Error creating order:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
        <p>{userId}</p>
      <h2>Complete Order</h2>
      <form onSubmit={handleSubmit}>        
        <div>
          <label>Shipping Address:</label>
          <input
            type="text"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            required
          />
        </div>

        <div>
          <h3>Order Products</h3>
          {userCart.map((product, index) => (
            <div key={index}>
              <label>Product ID:</label>
              <input
                type="text"
                value={product.productId}
                onChange={(e) =>
                  handleProductChange(index, "productId", e.target.value)
                }
                required
              />
              <label>Quantity:</label>
              <input
                type="number"
                value={product.quantity}
                onChange={(e) =>
                  handleProductChange(index, "productQuantity", e.target.value)
                }
                required
              />
              <label>Price:</label>
              <input
                type="number"
                value={product.price}
                onChange={(e) =>
                  handleProductChange(index, "productPrice", e.target.value)
                }
                required
              />
            </div>
          ))}
          {/* <button type="button" onClick={addProduct}>
            Add Another Product
          </button> */}
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Creating Order..." : "Create Order"}
          </button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};