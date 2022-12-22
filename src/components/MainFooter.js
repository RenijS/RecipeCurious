import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function MainFooter() {
  return (
    <div className="mainFooter">
      <nav className="navCard socialLinks">
        <strong className="click">RecipeCurious</strong>
        <ul className="socialsUl">
          <li>
            <FontAwesomeIcon icon={faFacebook} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faPinterest} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTiktok} className="click" />
          </li>
        </ul>
      </nav>
      <nav className="navCard siteMap">
        <p className="navTitle">Site Map</p>
        <ul className="nonImageUl">
          <li>Recipes & Menus</li>
          <li>Expert Advice</li>
          <li>Ingredients</li>
          <li>Holiday & Events</li>
          <li>Video</li>
        </ul>
      </nav>
      <nav className="navCard">
        <p className="navTitle">Helpful Links</p>
        <ul className="nonImageUl">
          <li>Subscription FAQs</li>
          <li>Contact Us</li>
          <li>Masthead</li>
          <li>Accessibility Help</li>
          <li>Advertising</li>
          <li>Newsletters</li>
        </ul>
      </nav>
      <nav className="navCard">
        <p className="navTitle">Food Innovation Group</p>
        <ul className="nonImageUl">
          <li>The Epicurious App</li>
          <li>Bon Appetit</li>
          <li>Epicurious</li>
          <li>Gourmet</li>
        </ul>
      </nav>
    </div>
  );
}
