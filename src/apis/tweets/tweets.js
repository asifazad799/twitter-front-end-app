import axios from "axios";

export const getRecentTweets = (data) =>
  axios.get(
    `${process.env.REACT_APP_BASEURL}/search/tweets?query=${encodeURIComponent(
      data
    )}`
  );
