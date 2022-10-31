import React from "react";
import useGoogleSearch from "./useGoogleSearch";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
