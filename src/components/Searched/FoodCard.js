import React from "react";
import upcomingImg from "../../images/comingSoon.jpg";

export default function FoodCard(props) {
  console.log(props);
  return (
    <>
      <a href="" className="recipe-view-card">
        <div className="imgContainer">
          <img
            src={props.items.thumbnail_url}
            alt="coming soon img"
            className="view-card-img"
          />
        </div>
        <h4 className="view-card-title">
          {props !== undefined && props.items.name}
        </h4>
      </a>
    </>
  );
}
