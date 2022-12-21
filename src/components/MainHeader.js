import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function MainHeader() {
  return (
    <div className="findCard">
      <strong className="findTitle">Find a Recipe</strong>
      <section className="searchSection">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </section>
      <span>
        Advanced Search <FontAwesomeIcon icon={faCaretRight} />
      </span>
    </div>
  );
}
