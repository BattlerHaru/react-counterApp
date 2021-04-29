import PropTypes from "prop-types";
import { useState } from "react";

const PrimeraApp = ({ value }) => {
  // Hook useState, regresa un arreglo de 'algo' y una funcion
  //   const state = useState("Goku");
  //   const [nombre, setNombre] = useState("Goku");
  const [counter, setCounter] = useState(value);

  // handleAdd
  //   const handleAdd = (e) => {
  //     console.log(e);
  //   };
  const handleAdd = () => {
    // setCounter(counter + 1);
    // Esta es otra manera de hacerlo
    setCounter((c) => c + 1);
  };

  const handleSubtract = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter((c) => (c = value));
  };

  return (
    <>
      <h1>CounterApp</h1>
      {/* <h2>{value}</h2> */}
      <h2>{counter}</h2>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

PrimeraApp.propTypes = {
  value: PropTypes.number.isRequired,
};

PrimeraApp.defaultProps = {
  value: 0,
};

export default PrimeraApp;
