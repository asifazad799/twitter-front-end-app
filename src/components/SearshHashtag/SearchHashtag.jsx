import React, { useState, useEffect } from "react";
import "./SearchHashtag.css";
import SearchBar from "../SearchBar/SearchBar";
import TwitterIcon from "@mui/icons-material/Twitter";
import Form from "../Form/Form";
import { getRecentTweets } from "../../apis/getTweets/getTweets";
import TweetList from "../TweetList/TweetList";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";

function SearchHashtag({ arr, setArr }) {
  const [searchQuery, setSearchQuery] = useState();
  const [results, setResults] = useState([]);

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const getTweets = async () => {
    try {
      let res = await getRecentTweets(searchQuery);
      socket.emit("getRealTimeTweets", "world");
      console.log(res);
    } catch (error) {
      console.log("api call3", error);
    }
  };
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    socket.on("tweet", (data) => {
      setArr((prev) => [data, ...prev]);
      console.log("data", data);
    });
  }, []);

  return (
    <div className="searchHashtagContainer">
      <div className="searchHashtagSubContainer">
        <div className="serachBarContainer">
          <TwitterIcon fontSize="large" color="primary" />
          <Form onSubmitForm={getTweets}>
            <SearchBar onChangeHandler={onChangeHandler} />
          </Form>
        </div>
        <div>
          <TweetList tweets={arr} />
        </div>
      </div>
    </div>
  );
}

export default SearchHashtag;
