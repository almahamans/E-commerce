import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const SaveCartToLocalStorage = (cartItems) => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    };
    const GetCartFromLocalStorage = () => {
        const cartData = localStorage.getItem("cart");
        return cartData ? JSON.parse(cartData) : [];
    };

    const [userCart, setCart] = useState(GetCartFromLocalStorage);

    const AddToCart = (product) => {
      setCart((products) => {
        const findProduct= products.findIndex(item => item.productId === product.productId)
        
        let updatedCart;

        if (findProduct >= 0) {
          updatedCart = [...products];
          updatedCart[findProduct].quantity += 1;
        } else {
          updatedCart = [...products, { ...product, quantity: 1 }];
        }

        SaveCartToLocalStorage(updatedCart); 
        console.log("updatedCart in adding", updatedCart);
        return updatedCart;
      })
    };

//     const RemoveFromCart = (productId) => {
//         setCart((cart) => {
//             const updatedCart = cart.filter(item => item.productId !== productId)
//             SaveCartToLocalStorage(updatedCart); 
//             console.log("updatedCart in remove", updatedCart);
//             return updatedCart;
//         })
//     }
// const RemoveFromCart = (productId) => {
//   setCart((cart) => {
//     // Find the index of the product in the cart
//     const productIndex = cart.findIndex((item) => item.productId === productId);

//     // If product is found
//     if (productIndex >= 0) {
//       const updatedCart = [...cart]; // Create a copy of the cart

//       // Check if quantity is more than 1
//       if (updatedCart[productIndex].quantity > 1) {
//         // Decrease the quantity by 1
//         updatedCart[productIndex].quantity -= 1;
//       } else {
//         // Remove item from the cart if quantity is 1
//         updatedCart.splice(productIndex, 1);
//       }

//       // Save updated cart to localStorage
//       SaveCartToLocalStorage(updatedCart);

//       console.log("updatedCart in remove", updatedCart);
//       return updatedCart; // Update the state with the modified cart
//     }

//     return cart; // Return cart unchanged if product was not found
//   });
// };
    const ClearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

  useEffect(() => {
    SaveCartToLocalStorage(userCart);
  }, [userCart]);

  return (
    <CartContext.Provider
      value={{ userCart, AddToCart, RemoveFromCart, ClearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

