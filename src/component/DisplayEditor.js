// import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from "react";
import "./DisplayEditor.css";
// import Hotels from "./Hotels";
// import FoodPlaces from "./FoodPlaces";
// import Events from "./Events";

const testArrayObject = [
  { type: "hotel", name: "test1", address: "Rue des Comédiens 22" },
  { type: "restaurant", name: "test2", address: "Rue des Comédiens 24" },
];

const newArray = [];

export class DisplayEditor extends Component {
  addToArray = (props) => {
    newArray.push(props);
    console.log(newArray);
  };

  render() {
    return <div></div>;
  }
}

{
  /* <div id="editor">
        <div className="category">
          <p className="hotel">Hotel</p>
          <p className="restaurant">Restaurant</p>
          <p className="evenement">Evenement</p>
        </div>
        <div className="elements">
          <p onClick={this.addToArray}>{})</p>

          <p onClick={this.addToArray}>{}</p>
        </div>
      </div> */
}

// <div>
//   <Switch>
//     <Route path="/lodging">
//       <Hotels />
//     </Route>
//     <Route path="/food">
//       <FoodPlaces />
//     </Route>
//     <Route path="/events">
//       <Events />
//     </Route>
//   </Switch>
// </div>
