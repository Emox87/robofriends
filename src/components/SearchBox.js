import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="searchBox">
      <h1>ROBOFRIENDS</h1>
      <input
        type="search"
        placeholder="search contacts"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
