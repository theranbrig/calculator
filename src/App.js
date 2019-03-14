import React from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';

const App = () => (
  <NumberProvider>
    <Calculator />
  </NumberProvider>
);

export default App;
