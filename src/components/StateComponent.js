import React, { useState } from "react";
import CitiesComponent from "./CitiesComponent";

function StateComponent(props) {
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <li id={props.id} onClick={clickHandler}>
      {props.state.name}

      {isVisible && (
        <ul>
          {props.state.cities.map((item, index) => {
            return (
              <CitiesComponent
                id={`city${index + 1}`}
                key={`city${index + 1}`}
                city={item}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default StateComponent;
