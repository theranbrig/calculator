import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import Display from './components/Display';
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
