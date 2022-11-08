import axios from "axios";

console.log(process.env.REACT_APP_BEARER_TOKEN);

export const getRecentTweets = (data) =>
  axios.get(
    `${process.env.REACT_APP_BASEURL}/search/tweets?query=${data}`
  );
