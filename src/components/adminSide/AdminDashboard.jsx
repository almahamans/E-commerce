import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const AdminDashboard = () => {
    return (
      <div className="m-2">
        <h1 className="text-center mt-5 font-bold text-red-900">
          Admin Dashboard
        </h1>

        <section className="grid grid-rows-6 grid-cols-2 gap-5 mt-9 xxsmall:auto-rows-max">
          <p className="col-span-2 text-center font-bold">
            Category utilities:
          </p>
          <button className="rounded border-2 p-2">
            <Link to="/admin/add-category">Add Category</Link>
          </button>
          <button className="rounded border-2 p-2">
            <Link to="/admin/display-categories">
              Update and Delete Categories
            </Link>
          </button>
          <p className="col-span-2 text-center font-bold">Product utilities:</p>
          <button className="rounded border-2 p-2">
            <Link to="/admin/add-product">Add Product</Link>
          </button>
          <button className="rounded border-2 p-2">
            <Link to="/admin/display-products">Update and Delete Products</Link>
          </button>
          <p className="col-span-2 text-center font-bold">Users utilities:</p>
          <button className="rounded border-2 p-2">
            <Link to="/admin/display-users">Display and Delete Users</Link>
          </button>
        </section>
      </div>
    );
}
