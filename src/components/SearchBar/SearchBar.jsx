import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import "./Search.css";

function SearchBar({ onChangeHandler }) {
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <>
      <div className="search">
        <SearchIconWrapper>
          <SearchIcon color="action" />
        </SearchIconWrapper>
        <input
          className="searchInput"
          placeholder="Search…"
          onChange={onChangeHandler}
        />
      </div>
    </>
  );
}

export default SearchBar;
