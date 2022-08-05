import React, { useState } from "react";

function TownComponent(props) {
  return <li id={props.id}>{props.town.name}</li>;
}

export default TownComponent;
