import React, { useState, useEffect } from "react";
import "./SearchHashtag.css";
import SearchBar from "../SearchBar/SearchBar";
import TwitterIcon from "@mui/icons-material/Twitter";
import Form from "../Form/Form";
import { getRecentTweets } from "../../apis/tweets/tweets";
import { getRules, deleteRule } from "../../apis/tweets/tweetRules";
import TweetList from "../TweetList/TweetList";
import socketIOClient from "socket.io-client";
import RulesList from "../RulesList/RulesList";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
const ENDPOINT = "http://localhost:8080";

function SearchHashtag({ arr, setArr }) {
  const [searchQuery, setSearchQuery] = useState();
  const [rules, setRules] = useState([]);
  const socket = socketIOClient(ENDPOINT);

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const getTweets = async () => {
    try {
      let res = await getRecentTweets(searchQuery);
      getRulesAPI();
    } catch (error) {
      console.log("api call3", error);
    }
  };

  const handleDeleteRule = async (id) => {
    try {
      await deleteRule(id);
      if (rules.filter((val) => val.id !== id).length > 0) {
        socket.emit("getRealTimeTweets", "world");
      }
      setRules(rules.filter((val) => val.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getRulesAPI = async () => {
    try {
      let res = await getRules();
      if (res?.data?.data.length > 0) {
        socket.emit("getRealTimeTweets", "world");
        setRules(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRulesAPI();
    socket.on("tweet", (data) => {
      setArr((prev) => [data, ...prev]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="searchHashtagContainer">
      <div className="searchHashtagSubContainer">
        <div className="serachBarContainer">
          <TwitterIcon fontSize="large" color="primary" />
          <Form onSubmitForm={getTweets}>
            <Stack flexDirection={"row"} gap={2}>
              <SearchBar onChangeHandler={onChangeHandler} />
              <Button
                type={"submit"}
                variant="contained"
                className="submitButton"
              >
                search
              </Button>
            </Stack>
          </Form>
        </div>
        <RulesList
          rules={rules}
          setRules={setRules}
          handleDeleteRule={handleDeleteRule}
        />
        {/* <div > */}
        <TweetList tweets={arr} />
        {/* </div> */}
      </div>
    </div>
  );
}

export default SearchHashtag;
