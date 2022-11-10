import React from "react";
import "./tweetList.css";
import TweetCard from "../tweetCard/TweetCard";

function TweetList({ tweets }) {
  console.log(tweets);
  return (
    <div className="tweetList">
      {tweets.map((val) => {
        console.log(val?.includes?.users[0]?.profile_image_url, "pic");
        return (
          <TweetCard
            profilePic={val?.includes?.users[0]?.profile_image_url}
            name={val?.includes?.users[0]?.name}
            userName={val?.includes?.users[0]?.username}
            text={val?.data?.text}
          />
        );
      })}
    </div>
  );
}

export default TweetList;
