import React from "react";
import "./tweetList.css";

function TweetList({ tweets }) {
  console.log(tweets);
  return (
    <div className="tweetList">
      <div className="tweetCard">
        <div className="tweetUserAvatar">
          <div className="proPic">

          </div>
        </div>
      </div>
      {/* {tweets.map((val) => {
        
      })} */}
    </div>
  );
}

export default TweetList;
