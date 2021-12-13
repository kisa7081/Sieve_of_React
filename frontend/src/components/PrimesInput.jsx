import React, { Component } from 'react';
import PrimesDisplay from './PrimesDisplay';

class PrimesInput extends Component {

    constructor(props) {
        super(props); 
    	this.state = {value: '', primes:''};
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleKeyDown = this.handleKeyDown.bind(this);
    	this.primes = '';
    } 

	handleSubmit(event) { 
   		event.preventDefault(); 
   		// Limit input to less than 1000
   		if(this.state.value > 1000) {
   			alert('Please limit the value to a number less than 1000.');
   			return;
   		}
   		
   		// Demonstrating using a custom event.
    	const customEvent = new CustomEvent('getPrimes', { detail: { value: this.state.value } });
    	document.dispatchEvent(customEvent);
  	}
  
    handleChange(event) {
    	this.setState({value: event.target.value});
  	}
  	
  	handleKeyDown(evt) {
  		//prevent non-numeric keystrokes other than backspace or delete
	     if ((evt.which < 48 && evt.which !== 8 && evt.which !== 46) || evt.which > 57) { 
	        evt.preventDefault();
	    }
  	}

	render() {
    	return (
    	<div className="PrimesInput" data-testid="PrimesInput">
	      	<form onSubmit={this.handleSubmit}>
	        	<label>
	         	 Enter a number to find all prime numbers less than that number (maximum 1000): 
	         	 <input type="text" name='primeInput' value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
	        	</label>
	        	<input type="submit" defaultValue="Submit"  />
	      	</form>
	      	<PrimesDisplay primes={this.state}/>
	     </div>
    	);
  	}
}
  
export default PrimesInput;
  

