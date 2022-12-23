import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function SlideNav(props) {
  return (
    <>
      <div
        className={
          props.isHamMenuActive
            ? "slideNavBehind"
            : "slideNavBehind displayGone"
        }
        onClick={props.hamMenuCancelled}
      ></div>
      <nav
        className="slideNav"
        style={{ width: props.isHamMenuActive ? "18rem" : "0px" }}
      >
        <div className="cancelDiv">
          <FontAwesomeIcon icon={faXmark} onClick={props.hamMenuCancelled} />
        </div>
        <div className="navLogo">
          <span>RC</span>
        </div>
        <ul className="navLinks">
          <li>Recipes & Menus</li>
          <li>Expert Advice</li>
          <li>Ingredients</li>
          <li>Holidays & Events</li>
          <li>Video</li>
        </ul>
        <div className="socialsDiv">
          <span>Follow RecipeCurious!</span>
          <ul className="socialsLinks">
            <li>
              <FontAwesomeIcon icon={faFacebook} className="click" />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="click" />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} className="click" />
            </li>
          </ul>
        </div>
        <button className="signIn">Sign In</button>
      </nav>
    </>
  );
}
