import axios from "axios";

export const getRules = () =>
  axios.get(`${process.env.REACT_APP_BASEURL}/rules/get`);
export const deleteRule = (id) =>
  axios.delete(`${process.env.REACT_APP_BASEURL}/rule/delete?id=${id}`);
