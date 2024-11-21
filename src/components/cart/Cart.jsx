import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { CartContext } from '../../context/CartContext';
import { Image } from '../Image';
import { Title } from '../Title';
import { Price } from '../products/productDetails/Price';
import { Quantity } from '../products/productDetails/Quantity';



export const Cart = () => {
    const { userCart, RemoveFromCart, ClearCart, totalAmount } = useContext(CartContext);
    const navigate = useNavigate();
    
    const handleDetailsClick = (productId) => {
      navigate(`/customer/product-details/${productId}`);
    };

    const handleOrder = async() => {
      navigate("/customer/complete-order")
    }
 return (
   <div className="mb-44">
     <h1 className="text-center font-bold p-9 text-red-900 text-lg">
      Cart:
     </h1>
     {userCart.length === 0 ? (
       <h1 className="text-center font-bold">Your cart is empty</h1>
     ) : (
       userCart.map((item) => (
         <div
           className="flex flex-col justify-center items-center"
           key={item.productId}
         >
           <div className="flex justify-around items-center mb-2 rounded border w-2/3 h-29">
             <Image Image={item.image} Title={item.productName} style="h-20" />
             <div>
               <Title Name={item.productName} />
               <Price Price={item.price} />
               <Quantity Quantity={item.quantity} />
             </div>
             <button
               onClick={() => handleDetailsClick(item.productId)}
               className="border-2 px-3 rounded-lg border-gray-700 text-sm mb-2"
             >
               Show Details
             </button>
             <div>
               <button onClick={() => RemoveFromCart(item.productId)}>
                 Remove
               </button>
               <ToastContainer
                 position="top-center"
                 autoClose={1000}
                 hideProgressBar
                 newestOnTop={false}
                 closeOnClick
                 rtl={false}
                 pauseOnFocusLoss
                 draggable
                 pauseOnHover={false}
                 theme="light"
               />
             </div>
           </div>
         </div>
       ))
     )}
     <div className="flex justify-evenly items-center p-5 mt-9">
       {userCart.length > 0 && (
         <button
           onClick={ClearCart}
           className="border rounded-full border-pink-900 py-1 px-5 text-pink-900 text-sm"
         >
           Clear Cart
         </button>
       )}
       {userCart.length > 0 && (
         <p className="underline text-pink-900 ">Total Cart: {totalAmount}</p>
       )}
       {userCart.length > 0 && (
         <button
           onClick={handleOrder}
           className="text-pink-900 text-sm border rounded-full border-pink-900 py-1 px-5 text-pink-900"
         >
           Continue with order
         </button>
       )}
     </div>
   </div>
 );
}
