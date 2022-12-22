import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchPopup(props) {
  return (
    <div
      className={
        props.isSearchActive ? "searchPopup" : "searchPopup displayGone"
      }
    >
      <form>
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
          />
        </div>
      </form>
    </div>
  );
}
