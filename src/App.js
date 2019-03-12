import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';

class App extends Component {
	render() {
		return (
			<NumberProvider>
				<div className="App">
					<Calculator />
				</div>
			</NumberProvider>
		);
	}
}

export default App;
