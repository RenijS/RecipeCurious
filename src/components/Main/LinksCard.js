import React from "react";

export default function LinksCard() {
  return (
    <div className="linksContainer">
      <div className="linkCard">
        <h4 className="linkTitle">Quick Links</h4>
        <ul className="linksUl">
          <li>Breakfast Recipes</li>
          <li>Lunch Recipes</li>
          <li>Dinner Recipes</li>
          <li>Dessert Recipes</li>
          <li>Drink Recipes</li>
          <li>Healthy Recipes</li>
          <li>Quick and Easy Recipes</li>
        </ul>
      </div>
      <div className="hLine"></div>
      <div className="linkCard">
        <h4 className="linkTitle">THE BEST OF</h4>
        <ul className="linksUl">
          <li>Valentine’s Day Recipes</li>
          <li>St. Patrick’s Day Recipes</li>
          <li>Easter Recipes</li>
          <li>4th of July Recipes</li>
          <li>Halloween Recipes</li>
          <li>Thanksgiving Recipes</li>
          <li>Christmas Recipes</li>
        </ul>
      </div>
      <div className="hLine"></div>
      <div className="linkCard">
        <h4 className="linkTitle">EPICURIOUS CLASSICS</h4>
        <ul className="linksUl">
          <li>Beef Recipes</li>
          <li>Chicken Recipes</li>
          <li>Seafood Recipes</li>
          <li>Pasta Recipes</li>
          <li>Salad Recipes</li>
          <li>Pork Recipes</li>
          <li>Fish Recipes</li>
        </ul>
      </div>
    </div>
  );
}
