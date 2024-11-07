import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setSearchTerm } = useContext(ProductContext);
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearch(value);
  };
  return (
    <section>
      <input
        type="text"
        value={search}
        placeholder="Search for a product"
        onChange={handleSearch}
        className="border-2 border-red-950 outline-red-900 p-2 min-w-96"
      />
    </section>
  );
};
