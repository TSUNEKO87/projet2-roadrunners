import { Circle } from '@react-google-maps/api';
import React, {Component} from 'react';
import CircleStep from './CircleStep';
import './JourneyBar.css';

class JourneyBar extends Component {
    constructor(props){
        super(props)
        this.state = {
             journeys : []   
        }    
    }

    addOneStep = (e) => {
        e.preventDefault();
        {/*const newStep = this.newStep.value */}
         const newStep = {
            id:this.state.journeys.length +1,
            name: this.newStep.value,
            type: 'shopping'
        }

        this.setState({
            journeys: [...this.state.journeys, newStep]
        })

    }

    render() {

        const {journeys} = this.state;
        return (
            <div>
                <form className='form-inline' onSubmit= {(e) => {this.addOneStep(e)}}>  {/*onsubmit permet d'ecouter la soumission du formulaire et aussi de permettre l'action d'une api*/}
                <label htmlFor='newStepInput'>add new step</label>
                <input ref={input => this.newStep = input} value={this.state.newStep} type='text'  placeholder='cinema' id='newStepInput'/>
                <input type='submit' value='Start !' />
            </form>
            <div className= 'toolbar'>
                <div className='start'>Start!</div>

                <div className='journey'>
                    <ul className='step'>
                    {this.props.journeys.map((journey) =>
                    <li key={journey.id}>
                       <CircleStep type={journey.type }/>  {/*passer une props au parents*/}
                        </li>
                    )}
                </ul>
                </div>
                
                <div className='end'>End!</div>
                   </div>
            </div>
        )
    }
}
export default JourneyBar;