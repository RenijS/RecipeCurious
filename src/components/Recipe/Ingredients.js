import React from "react";

export default function Ingredients(props) {
  console.log(props);
  return (
    <div className="ingredients-sect">
      <h2>Ingredients</h2>
      <div className="ingredients-ul-div">
        {props.sections.map((element) => {
          return (
            <ul className="ingredients-ul">
              <span className="ul-title">
                {element.name !== null && `For ${element.name}`}
              </span>
              {element.components.map((cpnt) => {
                return (
                  <li>
                    {cpnt.measurements[0].quantity}
                    {cpnt.measurements[0].unit.abbreviation}-{" "}
                    {cpnt.ingredient.name}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
