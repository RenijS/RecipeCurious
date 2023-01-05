import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./Searched/FoodCard";
import Error from "./Searched/Error";
import Loading from "./Searched/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Searched() {
  const param = useParams();

  const [apiArr, setApiArr] = useState([]);
  const [isError, setIsError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [compRecipeInfo, setCompRecipeInfo] = useState({
    name: "",
    desciption: "",
    recipes: [],
  });

  const onCompClicked = (recipeInfo) => {
    setCompRecipeInfo({ ...recipeInfo });
    window.scrollTo(0, 0);
  };

  if (process.env.REACT_APP_SECONDARY_RAPID_API_KEY == undefined) {
    console.log("Please subscribe to the api and add API KEY");
  }

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9437f06de2msh595bac5ce70161cp13f81fjsn7c0e1d2b5149",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };
    fetch(
      `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${param.searchedItem}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.results !== undefined && response.results.length < 1) {
          setNotFound(true);
        } else {
          setApiArr([...response.results]);
        }
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      });
  }, [param.searchedItem]);
  return (
    <>
      {compRecipeInfo.recipes.length !== 0 && (
        <div className="comp-card-wrapper">
          <div className="divCrossImage">
            <FontAwesomeIcon
              icon={faXmark}
              className="click"
              onClick={() =>
                setCompRecipeInfo({ name: "", desciption: "", recipes: [] })
              }
            />
          </div>
          <h1 style={{ textAlign: "center", color: "#eee" }}>
            {compRecipeInfo.name}
          </h1>
          <div className="food-card-wrapper">
            {compRecipeInfo.recipes.map((items) => {
              return (
                <div className="card-outer" key={items.id}>
                  <FoodCard items={items} />
                </div>
              );
            })}
          </div>
          <div className="divVertImage">
            <FontAwesomeIcon icon={faGripLinesVertical} />
          </div>
        </div>
      )}

      <div className="food-card-wrapper">
        {!isError &&
          apiArr.length !== 0 &&
          apiArr.map((items) => {
            return (
              <div className="card-outer" key={items.id}>
                <FoodCard items={items} onCompClicked={onCompClicked} />
              </div>
            );
          })}
        {isError && !notFound && <Error />}
        {!isError && !notFound && apiArr.length === 0 && <Loading />}
        {notFound && !isError && <></>}
      </div>
    </>
  );
}
