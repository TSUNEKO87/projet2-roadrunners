<<<<<<< HEAD
import React, {Component} from 'react';
import Map from './Map.js';
=======
import Map from "./Map";
import JourneyBar from "./JourneyBar";
import { Component } from "react";
>>>>>>> e26d10990e4084797117ec52a3e1bcefbb0f5f90



class Roadpage extends Component {
    constructor(props){
        super(props)
        this.state = {
            journeys: []
        }
    }

<<<<<<< HEAD
function Roadpage(props) {
    return(
        <>
            <Map />
        </>
=======

    addOneStep = (e) => {
        e.preventDefault();
        {/*const newStep = this.newStep.value */}
         const newStep = {
            id:this.state.journeys.length +1,
            name: this.newStep.value,
            type: 'restaurant'
        }
        
        this.setState({
            journeys: [...this.state.journeys, newStep]
        })
    }

    render(){
         return(
       <div>
           <Map />
           <JourneyBar journeys={this.state.journeys} />
       </div>
>>>>>>> e26d10990e4084797117ec52a3e1bcefbb0f5f90
    )
        
    }
}
    

export default Roadpage;
