import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { CartContext } from '../../context/CartContext';
import { Image } from '../Image';
import { Title } from '../Title';
import { Price } from '../products/productDetails/Price';
import { Quantity } from '../products/productDetails/Quantity';


export const Cart = () => {
    const { userCart, RemoveFromCart, ClearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const totalPrice = userCart.reduce(
    (total, item) => total + (item.price * item.quantity),
        0
    )
    
    const handleDetailsClick = (productId) => {
      navigate(`/customer/product-details/${productId}`);
    };
 return (
   <div className="mb-9 mb-44">
     <h1 className="text-center font-bold p-9 text-red-900">Your Cart:</h1>
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
     <div className="flex justify-evenly items-center p-5">
       {userCart.length > 0 && <button onClick={ClearCart}>Clear Cart</button>}
       {userCart.length > 0 && <p>Total Cart: {totalPrice}</p>}
     </div>
   </div>
 );
}
