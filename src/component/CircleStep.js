import React from 'react';
import { Switch } from 'react-router-dom';
const decideColor = (type) => {

    console.log(type)

    switch (type) {
        case 'restaurant':
            console.log('je suis dans restaurant.');
            return {
                backgroundColor : "red",
                borderRadius: '50%',
                height: '20px',
                width: '20px'
            }
            break;
        case 'hotel':
            console.log('je suis dans hotel')
            return {
                backgroundColor : "yellow",
                borderRadius: '50%',
                height: '20px',
                width: '20px'
            }
            break;
            
        case 'shopping':
            console.log('je suis dans shopping.');
            return {
                backgroundColor : "blu",
                borderRadius: '50%',
                height: '20px',
                width: '20px'
            }
            break;
        default:
            return {
                backgroundColor : "orange",
                borderRadius: '50%',
                height: '20px',
                width: '20px'
            }
    }
      
}

const CircleStep = (props) => {
      console.log(props)


     return(
            <div style={decideColor(props.type)}>    
     
            </div>
        )

 }
    
export default CircleStep;