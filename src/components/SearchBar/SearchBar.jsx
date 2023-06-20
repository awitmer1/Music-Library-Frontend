import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
