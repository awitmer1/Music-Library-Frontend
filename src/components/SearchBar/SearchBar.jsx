import React, { useState } from "react";

const SearchBar = ({ search, setSearch}) => {
    
    const [query, setQuery] = useState ('');

    const onSearch = (searchTerm) => {
        console.log('search', searchTerm);
        setSearch(query);
        setQuery('');
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
    </div>
  );
};

export default SearchBar;
