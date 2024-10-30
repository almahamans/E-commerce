import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'
import { SingleProduct } from './components/products/SingleProduct'
import Products from './components/products/Products'
import NavBar from './components/layout/header/NavBar'
import { Dashboard } from './pages/Dashboard'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
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
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
