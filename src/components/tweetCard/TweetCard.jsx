import React from "react";
import "../TweetList/tweetList.css";

function TweetCard({ profilePic, name, userName, text }) {
  return (
    <div className="tweetCard">
      <img className="proPic" src={profilePic} />
      <div className="tweetDataContainer">
        <div className="nameContainer">
          <h3 className="name">{name}</h3>
          <h4 className="userName">@{userName}</h4>
        </div>
        <div className="tweetContent">
          <p className="tweetMessage">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
