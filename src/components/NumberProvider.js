import React, { createContext, useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
	const [number, setNumber] = useState('');
	const [storedNumber, setStoredNumber] = useState('');
	const [functionType, setFunctionType] = useState(null);

	const getValue = num => {
		let storedValue = number;
		if (!storedValue.includes('.') || num !== '.') {
			setNumber(`${storedValue + num}`);
		}
	};

	const setValue = () => {
		setStoredNumber(number);
		setNumber('');
	};

	const clearValue = () => {
		setNumber('');
	};

	const addFunction = () => {
		setNumber(`${parseInt(number) + parseInt(storedNumber)}`);
	};

	const minusFunction = () => {
		setNumber(`${parseInt(storedNumber) - parseInt(number)}`);
	};

	const doMath = () => {
		switch (functionType) {
			case '+':
				addFunction();
				break;
			case '-':
				setNumber(`${parseInt(storedNumber) - parseInt(number)}`);
				break;
			case '/':
				setNumber(`${parseInt(storedNumber) / parseInt(number)}`);
				break;
			case '*':
				setNumber(`${parseInt(number) * parseInt(storedNumber)}`);
				break;
			default:
				break;
		}
	};

	const setCalcFunction = type => {
		setFunctionType(type);
		setValue(number);
	};

	return (
		<NumberContext.Provider
			value={{
				getValue,
				clearValue,
				number,
				storedNumber,
				setValue,
				setNumber,
				addFunction,
				minusFunction,
				setCalcFunction,
				doMath
			}}>
			{props.children}
		</NumberContext.Provider>
	);
};

export default NumberProvider;
