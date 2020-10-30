import React, { Component } from 'react'
import RequestForm from './RequestForm'



class PlanTrip extends Component{
  render() {
    return (
        <div className="plan-trip">
            <p>START YOUR JOURNEY NOW !</p>
            <RequestForm/>
        </div>
    );

  }
  
}

export default PlanTrip;
