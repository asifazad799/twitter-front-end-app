import React, { useState } from "react";
import "./SearchHashtag.css";
import SearchBar from "../SearchBar/SearchBar";
import TwitterIcon from "@mui/icons-material/Twitter";
import Form from "../Form/Form";
import { getRecentTweets } from "../../apis/getTweets/getTweets";

function SearchHashtag() {
  const [searchQuery, setSearchQuery] = useState();

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const getTweets = async () => {
    console.log("api call1");
    try {
      let res = await getRecentTweets(searchQuery);
      console.log("api call2", res);
    } catch (error) {
      console.log("api call3", error);
    }
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
