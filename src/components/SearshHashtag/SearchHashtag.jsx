import React, { useState } from "react";
import "./SearchHashtag.css";
import SearchBar from "../SearchBar/SearchBar";
import TwitterIcon from "@mui/icons-material/Twitter";
import Form from "../Form/Form";

function SearchHashtag() {
  const [searchQuery, setSearchQuery] = useState();

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const getTweets = async () => {
    console.log("djs");
  };

  return (
    <div className="searchHashtagContainer">
      <div className="searchHashtagSubContainer">
        <div className="serachBarContainer">
          <TwitterIcon fontSize="large" color="primary" />
          <Form onSubmitForm={getTweets}>
            <SearchBar onChangeHandler={onChangeHandler} />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SearchHashtag;
