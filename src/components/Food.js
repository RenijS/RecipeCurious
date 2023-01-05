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
        "X-RapidAPI-Key": "9437f06de2msh595bac5ce70161cp13f81fjsn7c0e1d2b5149",
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
