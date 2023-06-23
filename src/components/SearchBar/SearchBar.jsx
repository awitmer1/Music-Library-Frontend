import React, { useState } from "react";

const SearchBar = ({ setSearch, setResetSearch }) => {
  const [query, setQuery] = useState("");

  const onSearch = (searchTerm) => {
    console.log("search", searchTerm);
    setSearch(query);
    setQuery("");
  };

  function reset() {
    setResetSearch("click");
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={(e) => onSearch(query)}>Search</button>
      <button onClick={() => reset()}>Reset Search</button>
    </div>
  );
};

export default SearchBar;
