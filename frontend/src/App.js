import React, { Component } from 'react';
import PrimesInput from './components/PrimesInput';

class App extends Component {

	render() {
    	return (
		    <div className="App" data-testid="App">
		      <header className="App-header">
				<PrimesInput/>
		      </header>
		    </div>
    	);
  	}
}
  
export default App;
  

