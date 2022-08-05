import React, { useState } from "react";
import TownComponent from "./TownComponent";

function CitiesComponent(props) {
  const [isTownVisible, setIsTownVisible] = useState(false);

  const clickHandler = (e) => {
    e.stopPropagation();
    console.log(e.target);
    setIsTownVisible((prev) => !prev);
  };
  return (
    <li id={props.id} onClick={clickHandler}>
      {props.city.name}

      {isTownVisible && (
        <ul>
          {props.city.towns.map((item, index) => {
            return (
              <TownComponent
                id={`town${index + 1}`}
                key={`town${index + 1}`}
                town={item}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default CitiesComponent;
