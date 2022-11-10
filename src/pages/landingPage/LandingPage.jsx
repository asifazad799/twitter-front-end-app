import React from "react";
import SearchHashtag from "../../components/SearshHashtag/SearchHashtag";

function LandingPage() {
  const [arr, setArr] = React.useState([]);
  console.log(arr);
  return (
    <>
      <SearchHashtag arr={arr} setArr={setArr} />
    </>
  );
}

export default LandingPage;
