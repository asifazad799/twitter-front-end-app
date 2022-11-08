import React from "react";
import "./SearchHashtag.css";
import SearchBar from "../SearchBar/SearchBar";
import TwitterIcon from "@mui/icons-material/Twitter";

function SearchHashtag() {
  return (
    <div className="searchHashtagContainer">
      <div className="searchHashtagSubContainer">
        <div className="serachBarContainer">
          <TwitterIcon color="primary" />
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default SearchHashtag;
