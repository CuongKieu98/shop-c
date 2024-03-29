import React, { useState, useRef, useEffect, useDispatch } from "react";
import "./SearchBar.scss";
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
function SearchBar() {
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const handleSearchBarOpen = () => {
    setSearchBarOpen(!isSearchBarOpen);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    if (isSearchBarOpen === true) {
      searchRef.current.focus();
    }
  });
  const searchRef = useRef();
  //const dispatch = useDispatch();
  const searchLink = useRef();

    const handleSearch = (e) => {
      e.preventDefault();
    //   dispatch(setSearch(searchQuery.toLowerCase()));
    //   if (searchQuery !== "")
    //       searchLink.current.click();
  };
  return (
    <div className={`${isSearchBarOpen ? "SearchBar  open" : "SearchBar"}`}>
      <form onSubmit={handleSearch} className={"search-container"}>
        {isSearchBarOpen && (
          <>
            <Link to={"/home/search"} ref={searchLink} />
            <SearchIcon
              style={{ color: "grey" }}
              className="search-icon"
              fontSize="small"
            />
            <input
              id={"search-input"}
              name={"searchQuery"}
              value={searchQuery}
              onChange={handleSearchQuery}
              placeholder={"Search a track..."}
              type="text"
              ref={searchRef}
            />
          </>
        )}
      </form>
      {!isSearchBarOpen && (
        <div
          className={"SearchBar-customPlaceholderOpen"}
          onClick={handleSearchBarOpen}
        >
          <SearchIcon
            style={{ color: "grey" }}
            className="search-icon"
            fontSize="small"
          />
          <p className={"hide"}>&nbsp;Search</p>
        </div>
      )}
      {isSearchBarOpen && (
        <div
          className={"SearchBar-customPlaceholderClose"}
          onClick={handleSearchBarOpen}
        >
          {/*
            <p>Close&nbsp;</p>*/}
          <CancelIcon
            style={{ color: "grey" }}
            className="cancel hide"
            fontSize="small"
          />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
