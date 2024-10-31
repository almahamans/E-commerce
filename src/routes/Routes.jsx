import { createBrowserRouter } from "react-router-dom";
import { NavBar } from "../components/layout/header/NavBar";
import { Products } from "../components/products/Products";
import { Dashboard } from "../pages/Dashboard";
import { ErrorPage } from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import { Layout } from "../components/layout/Layout";
import { ProductDetails } from "../components/products/productDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "list-products",
        element: <Products />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
