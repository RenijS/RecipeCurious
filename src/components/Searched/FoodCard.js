import React from "react";

export default function FoodCard(props) {
  return (
    <>
      {props.items.is_shoppable && (
        <a href={`/recipes/${props.items.id}`} className="recipe-view-card">
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
      )}
      {!props.items.is_shoppable && (
        <div
          className="recipe-view-card compilation-view-card click"
          onClick={() =>
            props.onCompClicked({
              name: props.items.name,
              desciption: props.items.description,
              recipes: props.items.recipes,
            })
          }
        >
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
        </div>
      )}
    </>
  );
}
