import React from "react";
import { Link } from "react-router-dom";

export default function LinksCard() {
  return (
    <div className="linksContainer">
      <div className="linkCard">
        <h4 className="linkTitle">Quick Links</h4>
        <ul className="linksUl">
          <Link to={"/search/breakfast"}>
            <li>Breakfast Recipes</li>
          </Link>
          <Link to={"/search/lunch"}>
            <li>Lunch Recipes</li>
          </Link>
          <Link to={"/search/dinner"}>
            <li>Dinner Recipes</li>
          </Link>
          <Link to={"/search/dessert"}>
            <li>Dessert Recipes</li>
          </Link>
          <Link to={"/search/drink"}>
            <li>Drink Recipes</li>
          </Link>
          <Link to={"/search/healthy"}>
            <li>Healthy Recipes</li>
          </Link>
          <Link to={"/search/quick and easy"}>
            <li>Quick and Easy Recipes</li>
          </Link>
        </ul>
      </div>
      <div className="hLine"></div>
      <div className="linkCard">
        <h4 className="linkTitle">THE BEST OF</h4>
        <ul className="linksUl">
          <Link to={"/search/valentine"}>
            <li>Valentine’s Day Recipes</li>
          </Link>
          <Link to={"/search/st. patrick"}>
            <li>St. Patrick’s Day Recipes</li>
          </Link>
          <Link to={"/search/easter"}>
            <li>Easter Recipes</li>
          </Link>
          <Link to={"/search/4th of July"}>
            <li>4th of July Recipes</li>
          </Link>
          <Link to={"/search/Halloween"}>
            <li>Halloween Recipes</li>
          </Link>
          <Link to={"/search/Thanksgiving"}>
            <li>Thanksgiving Recipes</li>
          </Link>
          <Link to={"/search/Christmas"}>
            <li>Christmas Recipes</li>
          </Link>
        </ul>
      </div>
      <div className="hLine"></div>
      <div className="linkCard">
        <h4 className="linkTitle">RECIPECURIOUS CLASSICS</h4>
        <ul className="linksUl">
          <Link to={"/search/beef"}>
            <li>Beef Recipes</li>
          </Link>
          <Link to={"/search/chicken"}>
            <li>Chicken Recipes</li>
          </Link>
          <Link to={"/search/seafood"}>
            <li>Seafood Recipes</li>
          </Link>
          <Link to={"/search/pasta"}>
            <li>Pasta Recipes</li>
          </Link>
          <Link to={"/search/salad"}>
            <li>Salad Recipes</li>
          </Link>
          <Link to={"/search/pork"}>
            <li>Pork Recipes</li>
          </Link>
          <Link to={"/search/fish"}>
            <li>Fish Recipes</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
