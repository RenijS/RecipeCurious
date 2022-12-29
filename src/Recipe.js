import React from "react";
import RecipeHeader from "./components/Recipe/RecipeHeader";

export default function Recipe(props) {
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
    </>
  );
}
