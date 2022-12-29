import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchPopup(props) {
  const [search, setSearch] = useState("");
  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search/${search}`;
  };

  return (
    <div
      className={
        props.isSearchActive ? "searchPopup" : "searchPopup displayGone"
      }
    >
      <form onSubmit={onFormSubmit}>
        <FontAwesomeIcon
          icon={faXmark}
          className="click"
          onClick={props.searchCancelled}
        />
        <div className="searchDiv">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            name="recipe"
            id="recipe"
            placeholder="Find a recipe"
            onChange={searchChange}
            value={search}
            required
          />
        </div>
      </form>
    </div>
  );
}
