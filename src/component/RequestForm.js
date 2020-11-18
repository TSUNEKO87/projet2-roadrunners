<<<<<<< HEAD
import React, { Component } from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import Map from './Map.js';

class RequestForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            start: '',
            end: ''
          };
        
      }
=======
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: "",
    };
  }
>>>>>>> e26d10990e4084797117ec52a3e1bcefbb0f5f90

  handleChange = (e) => {
    const name = e.target.name; /*renvoie une strings*/

<<<<<<< HEAD
        this.setState({
          [name]: e.target.value   /*dinamique key creation ES6*/
        });

      }
=======
    this.setState({
      [name]: e.target.value /*dinamique key creation ES6*/,
    });
  };
>>>>>>> e26d10990e4084797117ec52a3e1bcefbb0f5f90

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/application", { ...this.state });
    console.log(
      "your favorite city is" + this.state.start + "and" + this.state.end
    );
  };

<<<<<<< HEAD
      handleSubmit =(e) => {
        e.preventDefault()
        this.props.history.push("/application", {...this.state});
         console.log( 'your favorite city is'  +  this.state.start +  'and'  + this.state.end )

      }   
      
      render() {
        return (
            <form className='RequestForm' onSubmit={this.handleSubmit}>  {/*onsubmit permet d'ecouter la soumission du formulaire et aussi de permettre l'action d'une api*/}
                <label htmlFor='start'></label>
                <input type='text'  value={this.state.start} placeholder='depart' onChange={this.handleChange} id='start' name='start' />
                <label htmlFor='end'></label>
                <input type='text' value={this.state.end} placeholder='destination' onChange={this.handleChange} id='end' name='end'/>
                <input type='submit' value='Start !' />
            </form>
        )
      }
    }
=======
  render() {
    return (
      <form className="RequestForm" onSubmit={this.handleSubmit}>
        {" "}
        {/*onsubmit permet d'ecouter la soumission du formulaire et aussi de permettre l'action d'une api*/}
        <label htmlFor="start"></label>
        <input
          type="text"
          value={this.state.start}
          placeholder="depart"
          onChange={this.handleChange}
          id="start"
          name="start"
        />
        <label htmlFor="end"></label>
        <input
          type="text"
          value={this.state.end}
          placeholder="destination"
          onChange={this.handleChange}
          id="end"
          name="end"
        />
        <input type="submit" value="Start !" />
      </form>
    );
  }
}
>>>>>>> e26d10990e4084797117ec52a3e1bcefbb0f5f90

export default withRouter(RequestForm);
