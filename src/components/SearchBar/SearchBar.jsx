import React from "react";

const SearchBar = ({search, setSearch}) => {
  return (
    <div className="search-bar">
      <h3>Search Bar</h3>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}          
      />
    </div>
  );
};

export default SearchBar;
