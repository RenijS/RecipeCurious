import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../Recipe";

export default function Food() {
  const param = useParams();
  const [clickedRecipe, setClickedRecipe] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "458ba7b3cfmshef2cd9983191a2ap13144djsndff3005ad45f",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    fetch(
      "https://tasty.p.rapidapi.com/recipes/get-more-info?id=" + param.id,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setClickedRecipe({ ...response });
      })
      .catch((err) => console.error(err));
  }, [param.id]);
  return (
    <>
      {clickedRecipe !== {} && clickedRecipe.is_shoppable && (
        <Recipe items={clickedRecipe} />
      )}
    </>
  );
}
