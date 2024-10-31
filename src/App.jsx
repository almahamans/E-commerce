import { RouterProvider } from "react-router-dom";

import "../src/index.css";
import { ProductProvider } from "./context/ProductContext";
import {router} from './routes/Routes';

function App() {
  return (
    <>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </>
  );
}

export default App;
