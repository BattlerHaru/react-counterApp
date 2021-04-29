// import React from "react";

// Para obligar a que se usen ciertos props se agrega lo siguiente
import PropTypes from "prop-types";

// Para evitar usar fragments se puede utilizar una etiqueta basia <>
// import { Fragment } from "react";

// Esto es un componente

// Para las props ya no es comun tenerlas asi, por lo que se utiliza la desestructuracion
// const PrimeraApp = (props) => {
const PrimeraApp = ({ saludo = "Hola Mundo", subtitulo }) => {
  //   const saludo = "Hola Mundo";
  //   const saludo = {
  //       nombre: 'test',
  //       edad: 34
  //   }

  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
