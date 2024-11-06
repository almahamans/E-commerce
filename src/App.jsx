import { RouterProvider } from "react-router-dom";

import "../src/index.css";
import { ProductProvider } from "./context/ProductContext";
import {router} from './routes/Routes';
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    <>
      <CategoryProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ ProductProvider>
      </ CategoryProvider>
    </>
  );
}

export default App;
