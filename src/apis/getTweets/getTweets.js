import axios from "axios";
import config from "../config/config";

export const getRecentTweets = () =>
  axios.get(`${process.env.REACT_APP_BASEURL}/tweets/search/recent`, config);