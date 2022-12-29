import React from "react";
import Recipe from "../Recipe";

export default function Food(props) {
  console.log(props);
  return <>{props.items.is_shoppable && <Recipe items={props.items} />}</>;
}
