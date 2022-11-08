import React from "react";
import "./SearchHashtag.css";
import SearchBar from "../SearchBar/SearchBar";

function SearchHashtag() {
  return (
    <div className="searchHashtagContainer">
      <div className="searchHashtagSubContainer">
        <div className="serachBarContainer">
          <SearchBar/>
        </div>
      </div>
    </div>
  );
}

export default SearchHashtag;
