import React, { Component } from 'react'

class RequestForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            start: '',
            end: ''
          };
        
      }

      handleChange = (e) => {
        const name= e.target.name  /*renvoie une strings*/

        this.setState({
          [name]: e.target.value   /*dinamique key creation ES6*/
        });
      }

      handleSubmit =(e) => {
        e.preventDefault()
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

export default RequestForm;
