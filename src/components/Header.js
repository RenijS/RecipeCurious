import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="parts">
        <FontAwesomeIcon icon={faBars} className="click" />
        <span className="signInBtn click">
          <FontAwesomeIcon icon={faHeart} />
          Sign In
        </span>
      </div>
      <div className="parts">
        <h1 className="click">RecipeCurious</h1>
      </div>
      <div className="parts">
        <span className="followContainer">
          Follow
          <div className="brandsContainer">
            <FontAwesomeIcon icon={faFacebook} className="click" />
            <FontAwesomeIcon icon={faInstagram} className="click" />
            <FontAwesomeIcon icon={faTwitter} className="click" />
          </div>
        </span>
        <span className="searchBtn click">
          Search
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
    </header>
  );
}
