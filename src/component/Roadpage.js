
import Map from "./Map";
import JourneyBar from "./JourneyBar";
import { Component } from "react";



class Roadpage extends Component {
    render(){
         return(
       <div>
           <Map />
           <JourneyBar/>
       </div>
    )
        
    }
}
    

export default Roadpage;