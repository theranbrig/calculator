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

	const setValue = () => {
		setStoredNumber(number);
		setNumber('');
	};

	const clearValue = () => {
		setNumber('');
		setStoredNumber('');
		setFunctionType('');
	};

	const handleBackButton = () => {
		if (number !== '0') {
			let deletedNumber = number.slice(0, number.length - 1);
			setNumber(deletedNumber);
		}
	};

	const doMath = () => {
		switch (functionType) {
			case '+':
				setStoredNumber(`${parseFloat(number) + parseFloat(storedNumber)}`);
				break;
			case '-':
				setStoredNumber(`${parseFloat(storedNumber) - parseFloat(number)}`);
				break;
			case '/':
				setStoredNumber(`${parseFloat(storedNumber) / parseFloat(number)}`);
				break;
			case '*':
				setStoredNumber(`${parseFloat(number) * parseFloat(storedNumber)}`);
				break;
			default:
				break;
		}
		setNumber('');
	};

	const setCalcFunction = type => {
		if (number) {
			setFunctionType(type);
			setValue();
		}
		if (storedNumber) {
			setFunctionType(type);
		}
	};

	const toggleNegative = () => {
		if (number >= 0) {
			setNumber(`-${number}`);
		} else {
			let positiveNumber = number.slice(1);
			setNumber(positiveNumber);
		}
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
				setCalcFunction,
				doMath,
				handleBackButton,
				toggleNegative,
				functionType
			}}>
			{props.children}
		</NumberContext.Provider>
	);
};

export default NumberProvider;
