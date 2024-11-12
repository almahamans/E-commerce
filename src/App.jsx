import { RouterProvider } from "react-router-dom";

import "../src/index.css";
import { ProductProvider } from "./context/ProductContext";
import { router } from "./routes/Routes";
import { CategoryProvider } from "./context/CategoryContext";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <CategoryProvider>
        <ProductProvider>
          <CartProvider>
            <UserProvider>
              <RouterProvider router={router} />
            </UserProvider>
          </CartProvider>
        </ProductProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
