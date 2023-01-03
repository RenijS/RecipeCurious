import React from "react";

export default function RecipeHeader(props) {
  console.log(props);
  return (
    <div className="recipe-header">
      <div className="header-info">
        {props.info.name != null && (
          <h1 className="header-name">{props.info.name}</h1>
        )}
        {props.info.prepTime != null && (
          <span className="header-prepTime">
            Prep time: {props.info.prepTime}min
          </span>
        )}
        {props.info.cookTime != null && (
          <span className="header-cookTime">
            Cook time: {props.info.cookTime}min
          </span>
        )}
        {props.info.numServings != null && (
          <span className="header-numServings">
            No. of Servings: {props.info.numServings}
          </span>
        )}
      </div>
      <div className="header-img">
        <img src={props.info.thumbnail_url} alt="food image" />
      </div>
    </div>
  );
}
