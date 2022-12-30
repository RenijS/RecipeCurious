import React from "react";

export default function Instructions(props) {
  console.log(props);
  return (
    <div className="instruction-sect">
      <ul className="instruction-ul">
        {props.instructions.map((action) => {
          return (
            <li key={action.id}>
              {action.position} <p>{action.display_text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
