import React, { Component } from "react";
import RequestForm from "./RequestForm";

class PlanTrip extends Component {
  render() {
    return (
      <div className="plan-trip">
        <p className="plantrip-text">Start your journey now !</p>
        <RequestForm />
      </div>
    );
  }
}

export default PlanTrip;
