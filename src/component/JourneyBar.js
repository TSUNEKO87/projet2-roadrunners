import React, { Component } from "react";
import CircleStep from "./CircleStep";
import "./JourneyBar.css";

class JourneyBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: [],
    };
  }
  render() {
    const { journeys } = this.state;
    return (
      <div className="toolbar">
        <div className="start"></div>

        <div className="journey">
          <ul className="step">
            {this.props.journeys.map((journey) => (
              <li key={journey.id}>
                <CircleStep type={journey.type} />{" "}
                {/*passer une props au parents*/}
              </li>
            ))}
          </ul>
        </div>
        <div className="end">End!</div>
      </div>
    );
  }
}
export default JourneyBar;
