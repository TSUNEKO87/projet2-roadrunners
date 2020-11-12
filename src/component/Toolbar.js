import React, {Component} from 'react';
import './Toolbar.css';

class Toolbar extends Component {
    constructor(props){
        super(props)
        this.state = {
             journeys : []   
        }    
    }

    addItem = (e) => {
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

    render() {

        const {journeys} = this.state;
        return (
            <div>
                <form className='form-inline' onSubmit= {(e) => {this.addItem(e)}}>  {/*onsubmit permet d'ecouter la soumission du formulaire et aussi de permettre l'action d'une api*/}
                <label htmlFor='newStepInput'>add new step</label>
                <input ref={input => this.newStep = input} value={this.state.newStep} type='text'  placeholder='cinema' id='newStepInput'/>
                <input type='submit' value='Start !' />
            </form>
            <div className= 'toolbar'>
                <div className='start'>Start!</div>

                <div className='journey'>
                    <ul className='step'>
                    {journeys.map((journey) =>
                    <li key={journey.id}>
                        <div className='circle'></div>
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
export default Toolbar;