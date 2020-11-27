import React from "react";
import { Switch } from "react-router-dom";
import restaurant from "./restaurant.png";
import hotelIcon from "./hotelIcon.png";
import eventIcon from "./eventIcon.png";

const decideColor = (type) => {
  console.log(type);

  let style = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    border: "2px solid #FA7F72",
  };

  switch (type) {
    case "food":
      console.log("je suis dans restaurant.");
      return {
        ...style /*donne moi toutes les clefs de style , et le backgoungImage*/,
        backgroundImage: `url(${restaurant})`,
        /*(style.backgroundImage= `url(${hotelIcon)`)*/
      };
      break;

    case "lodging":
      console.log("je suis dans hotel");
      return {
        ...style,
        backgroundImage: `url(${hotelIcon})`,
        /*(style.backgroundImage= `url(${hotelIcon)`)*/
      };
      break;

    case "point_of_interest":
      console.log("C'est un event");
      return {
        ...style,
        backgroundImage: `url(${eventIcon})`,
        /*(style.backgroundImage= `url(${hotelIcon)`)*/
      };
      break;

    default:
      return {
        ...style,
      };
  }
};

const CircleStep = (props) => {
  console.log(props);

  return <div style={decideColor(props.type)}></div>;
};

export default CircleStep;
