import React, { useState } from 'react';

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
		if (number.length < 10) {
			setStoredNumber(number);
			setNumber('');
		}
	};

	const clearValue = () => {
		setNumber('');
		setStoredNumber('');
		setFunctionType('');
	};

	const handleBackButton = () => {
		if (number !== '') {
			let deletedNumber = number.slice(0, number.length - 1);
			setNumber(deletedNumber);
		}
	};

	const doMath = () => {
		if (number && storedNumber) {
			switch (functionType) {
				case '+':
					setStoredNumber(
						`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`
					);
					break;
				case '-':
					setStoredNumber(
						`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`
					);
					break;
				case '/':
					setStoredNumber(
						`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`
					);
					break;
				case '*':
					setStoredNumber(
						`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`
					);
					break;
				default:
					break;
			}
			setNumber('');
		}
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
		if (number) {
			if (number >= 0) {
				setNumber(`-${number}`);
			} else {
				let positiveNumber = number.slice(1);
				setNumber(positiveNumber);
			}
		} else {
			if (storedNumber >= 0) {
				setStoredNumber(`-${storedNumber}`);
			} else {
				let positiveNumber = storedNumber.slice(1);
				setStoredNumber(positiveNumber);
			}
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
