import { createBrowserRouter } from "react-router-dom";

import { Products } from "../components/products/Products";
import { ErrorPage } from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import { Layout } from "../components/layout/Layout";
import { ProductDetails } from "../components/products/productDetails/ProductDetails";
import { Categories } from "../components/categories/Categories";
import { SignIn } from "../pages/user/SignIn";
import { UserRegisterForm } from "../pages/user/UserRegister";
import { ProtectedRoute } from "./ProtectedRoute";
import { Cart } from "../components/cart/Cart";
import { CategoryProducts } from "../components/products/CategoryProducts";

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
        path: "categories",
        element: <Categories />,
      },
      {
        path: "category-products/:categoryId",
        element: <CategoryProducts />,
      },     
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "product-details/:id",
            element: <ProductDetails />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
      {
        path: "register",
        element: <UserRegisterForm />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);
