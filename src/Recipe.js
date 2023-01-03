import React from "react";
import RecipeHeader from "./components/Recipe/RecipeHeader";
import Ingredients from "./components/Recipe/Ingredients";
import Instructions from "./components/Recipe/Instructions";

export default function Recipe(props) {
  console.log(props);
  const headerInfos = {
    name: props.items.name,
    prepTime: props.items.prep_time_minutes,
    cookTime: props.items.cook_time_minutes,
    instructions: props.items.instructions,
    numServings: props.items.num_servings,
    thumbnail_url: props.items.thumbnail_url,
  };

  return (
    <>
      <RecipeHeader info={headerInfos} />
      <div className="recipe-info-div">
        <div className="recipe-info-sect">
          <Ingredients sections={props.items.sections} />
          <Instructions instructions={props.items.instructions} />
        </div>
      </div>
    </>
  );
}
