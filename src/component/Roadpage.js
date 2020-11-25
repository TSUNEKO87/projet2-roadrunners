import Map from "./Map";
import JourneyBar from "./JourneyBar";
import { Component } from "react";
import DisplayEditor from "./DisplayEditor";

class Roadpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: [],
    };
  }

  addOneStep = (info, hardType) => {
    console.log(info);
    let type = "";
    if (info.types.includes("food") && info.types.includes("restaurant")) {
      type = "food";
    }
    if (info.types.includes("lodging")) {
      type = "hotel";
    }

    if (info.types.includes("point_of_interest")) {
      type = "events";
    }
    if (info.types.includes("food") && info.types.includes("lodging")) {
      type = "lodging";
    }

    // {
    //   /*const newStep = this.newStep.value */
    // }
    const newStep = {
      id: this.state.journeys.length + 1,
      name: info.name,
      type: hardType,
    };

    this.setState({
      journeys: [...this.state.journeys, newStep],
    });
  };

  render() {
    return (
      <div>
        <DisplayEditor addOneStep={this.addOneStep} />
        <Map />
        <JourneyBar journeys={this.state.journeys} />
      </div>
    );
  }
}

export default Roadpage;
