import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const SaveCartToLocalStorage = (cartItems) => {
        localStorage.setItem("productsCart", JSON.stringify(cartItems));
    };

    const GetCartFromLocalStorage = () => {
      const cartData = localStorage.getItem("productsCart");
      try {
        return cartData ? JSON.parse(cartData) : [];
      } catch (error) {
        console.error("Error parsing cart data:", error);
        return [];
      }
    }

    const [userCart, setCart] = useState(() => {
      const initialCart = GetCartFromLocalStorage();
      return Array.isArray(initialCart) ? initialCart : [];
    });

const AddToCart = (product) => {
  setCart((productsCart) => {
    const findProductIndex = productsCart.findIndex((item) => item.productId === product.productId);

    let updatedCart;
    if (findProductIndex >= 0) {
      updatedCart = [...productsCart];
      updatedCart[findProductIndex] = {
        ...updatedCart[findProductIndex],
        quantity: updatedCart[findProductIndex].quantity + 1,
      };
    } else {
      updatedCart = [...productsCart, { ...product, quantity: 1 }];
    }
    SaveCartToLocalStorage(updatedCart);
    console.log("updatedCart in adding", updatedCart);
    return updatedCart;
  });
};

  const RemoveFromCart = (productId) => {
  setCart((productsCart) => {
    const productIndex = productsCart.findIndex((item) => item.productId === productId);
    if (productIndex >= 0) {
      const updatedCart = [...productsCart];

      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity: updatedCart[productIndex].quantity - 1,
        };
      } else {
        updatedCart.splice(productIndex, 1);
      }
      SaveCartToLocalStorage(updatedCart);
      console.log("updatedCart in remove", updatedCart);
      return updatedCart;
    }
    return productsCart;
  })
  }

  const ClearCart = () => {
      setCart([]);
      localStorage.removeItem("productsCart");
  };

  useEffect(() => {
    if (!Array.isArray(userCart)) {
      console.error("userCart is not an array:", userCart);
      setCart([]);
    } else {
      SaveCartToLocalStorage(userCart);
    }
  }, [userCart]);

  return (
    <CartContext.Provider
      value={{ userCart, AddToCart, RemoveFromCart, ClearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
