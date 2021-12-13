import React, { Component } from 'react';


class PrimesDisplay extends Component {

    constructor(props) {
        super(props); 
    	this.state = {value: ''};
    	this.getPrimes = this.getPrimes.bind(this);
    	document.addEventListener('getPrimes', this.getPrimes);
    } 

	getPrimes(evt){
		fetch('/demo/primes/?n=' + evt.detail.value)
        	.then(response => response.json())
        	.then(data => this.setState({value : data.toString()}));
	}

	render() {
		return (
			<div className='PrimesDisplay' data-testid="PrimesDisplay">
				<label>
	         	The prime numbers less than the entered number: <div>{this.state.value}</div>
	        	</label>
			</div>
		);
	}
}

export default PrimesDisplay;