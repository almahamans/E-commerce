import { createBrowserRouter } from "react-router-dom";
import { NavBar } from "../components/layout/header/NavBar";
import { Products } from "../components/products/Products";
import { Dashboard } from "../pages/user/Dashboard";
import { ErrorPage } from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import { Layout } from "../components/layout/Layout";
import { ProductDetails } from "../components/products/productDetails/ProductDetails";
import { Categories } from "../components/categories/Categories";
import { SignIn } from "../pages/user/SignIn";
import { UserRegisterForm } from "../pages/user/UserRegister";
import { ProtectedRoute } from "./ProtectedRoute";

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
        path: "/list-categories",
        element: <Categories />,
      },
      // {
      //   path: "/",
      //   element: <ProtectedRoute />,
      //   children: [
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
      //   ],
      // },
      {
        path: "register",
        element: <UserRegisterForm />,
      },
      {
        path: "signin",
        element: <SignIn />,
      }
    ],
  },
]);
