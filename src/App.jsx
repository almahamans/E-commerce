import '../src/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'
import {Products} from './components/products/Products'
import {NavBar} from './components/layout/header/NavBar'
import { Dashboard } from './pages/Dashboard'
import { ProductContext, ProductProvider } from './components/context/ProductContext'

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
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </>
  );
}

export default App
