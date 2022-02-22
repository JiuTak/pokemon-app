import React from "react";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <select
          className="sorting-item"
          //   defaultValue="DEFAULT"
          //   onChange={(e) => setOption(e.target.value)}
          //   className="sort-options"
        >
          <option className="sort-value" value="10-cards">
            Showing 10 results
          </option>
          <option className="sort-value" value="20-cards">
            Showing 20 results
          </option>
        </select>
      </div>
      <div className="input-container">
        <input
          className="search-teams-inputbar"
          placeholder="&#xF002; Search Teams "
        />
      </div>
      <div>
        <select
          className="sorting-item"
        >
          <option value="Sort items">Sort items</option>
          <option className="sort-value" value="AlphabeticallyAZ">
            A-Z
          </option>
          <option className="sort-value" value="AlphabeticallyZA">
            Z-A
          </option>
        </select>
      </div>
    </div>
  );
}
