import React from "react";

export default function Ingredients(props) {
  console.log(props);
  return (
    <div className="ingredients-sect">
      <h2>Ingredients</h2>
      <ul className="ingredients-ul">
        {props.sections.map((element) => {
          return (
            <>
              {element.components.map((cpnt) => {
                return (
                  <li>
                    {cpnt.measurements[0].quantity}
                    {cpnt.measurements[0].unit.abbreviation}-{" "}
                    {cpnt.ingredient.name}
                  </li>
                );
              })}
            </>
          );
        })}
      </ul>
    </div>
  );
}
