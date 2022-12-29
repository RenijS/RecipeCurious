import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./Searched/FoodCard";

export default function Searched() {
  const param = useParams();

  const [apiArr, setApiArr] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "458ba7b3cfmshef2cd9983191a2ap13144djsndff3005ad45f",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };
    fetch(
      `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${param.searchedItem}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setApiArr([...response.results]);
      })
      .catch((err) => console.error(err));
  }, [param.searchedItem]);
  return (
    <div className="food-card-wrapper">
      {apiArr.length != 0 &&
        apiArr.map((items) => {
          return (
            <div className="card-outer" key={items.id}>
              <FoodCard items={items} />
            </div>
          );
        })}
    </div>
  );
}
