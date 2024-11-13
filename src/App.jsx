import { RouterProvider } from "react-router-dom";

import "../src/index.css";
import { ProductProvider } from "./context/ProductContext";
import { router } from "./routes/Routes";
import { CategoryProvider } from "./context/CategoryContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CategoryProvider>
        <ProductProvider>
          <CartProvider>
              <RouterProvider router={router} />
          </CartProvider>
        </ProductProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
