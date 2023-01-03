import React from "react";

export default function Instructions(props) {
  console.log(props);
  return (
    <div className="instruction-sect">
      <ul className="instruction-ul">
        {props.instructions.map((action) => {
          return (
            <li key={action.id}>
              <span className="step-count"> Step {action.position}</span>
              <p>{action.display_text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
