import Map from "./Map";
import JourneyBar from "./JourneyBar";
import { Component } from "react";
import { DisplayEditor } from "./DisplayEditor";



class Roadpage extends Component {
    constructor(props){
        super(props)
        this.state = {
            journeys: [{type:'lodging', name:'restaurant Americain',}]
        }
    }

 
    addOneStep = (e) => {
        e.preventDefault();
        {/*const newStep = this.newStep.value */}
         const newStep = {
            id:this.state.journeys.length +1,
            name: this.newStep.value,
            type: ''
        }
        
        this.setState({
            journeys: [...this.state.journeys, newStep]
        })
    }

    render(){
         return(
       <div>
           <DisplayEditor/> 
           <Map />
           <JourneyBar journeys={this.state.journeys} />
       </div>
    )
        
    }
}
    
export default Roadpage;
