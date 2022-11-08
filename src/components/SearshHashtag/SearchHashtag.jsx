import React, { useState } from "react";
import "./SearchHashtag.css";
import SearchBar from "../SearchBar/SearchBar";
import TwitterIcon from "@mui/icons-material/Twitter";

function SearchHashtag() {
  const [searchQuery, setSearchQuery] = useState();

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  console.log(searchQuery);

  return (
    <div className="searchHashtagContainer">
      <div className="searchHashtagSubContainer">
        <div className="serachBarContainer">
          <TwitterIcon color="primary" />
          <SearchBar onChangeHandler={onChangeHandler} />
        </div>
      </div>
    </div>
  );
}

export default SearchHashtag;
