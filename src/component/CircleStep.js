import React from "react";
import { Switch } from "react-router-dom";
const decideColor = (type) => {
  console.log(type);

  switch (type) {
    case "food":
      console.log("je suis dans restaurant.");
      return {
        backgroundColor: "red",
        borderRadius: "50%",
        height: "20px",
        width: "20px",
      };
      break;
    case "lodging":
      console.log("je suis dans hotel");
      return {
        backgroundColor: "yellow",
        borderRadius: "50%",
        height: "20px",
        width: "20px",
      };
      break;

    case "point_of_interest":
      console.log("C'est un event");
      return {
        backgroundColor: "green",
        borderRadius: "50%",
        height: "20px",
        width: "20px",
      };
      break;

    default:
      return {
        backgroundColor: "black",
        borderRadius: "50%",
        height: "20px",
        width: "20px",
      };
  }
};

const CircleStep = (props) => {
  console.log(props);

  return <div style={decideColor(props.type)}></div>;
};

export default CircleStep;
