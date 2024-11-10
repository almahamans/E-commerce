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
import { AdminDashboard } from "../components/adminSide/AdminDashboard";
import { CustomerDashboard } from "../components/customerSide/CustomerDashboard";
import { AddCategory } from "../components/adminSide/adminFeatures/AddCategory";
import { AddProduct } from "../components/adminSide/adminFeatures/AddProduct";

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
        path: "products",
        element: <Products />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/",
        element: <ProtectedRoute requiredRole="Customer" />,
        children: [
          {
            path: "customer-dashboard",
            element: <CustomerDashboard />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
      {
        path: "admin",
        element: <ProtectedRoute requiredRole="Admin" />,
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "add-category",
            element: <AddCategory />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
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
