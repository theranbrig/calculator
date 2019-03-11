import React, { createContext, useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
	const [number, setNumber] = useState('');
	const [storedNumber, setStoredNumber] = useState('');
	const [functionType, setFunctionType] = useState('');

	const getValue = num => {
		let storedValue = number;
		if (!storedValue.includes('.') || num !== '.') {
			setNumber(`${storedValue + num}`);
		}
	};

	const setValue = num => {
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
				setFunctionType
			}}>
			{props.children}
		</NumberContext.Provider>
	);
};

export default NumberProvider;
