// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";
import "@testing-library/jest-dom";

describe("Pruenas en <PrimeraApp />", () => {
  // se comenta la prueba por que utilizar esta lib es algo compleja, asi que utilizaremos enzyme
  //   test("Debe de mostar el mensaje: Hola, soy Goku", () => {
  //     const saludo = "Hola, soy Goku";

  //     // render recibe un componente a renderizar
  //     // const wrapper = render(<PrimeraApp saludo={saludo} />);
  //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //     // wrapper.getByText();

  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test("Debe de mostrar <PrimeraApp/> ", () => {
    const saludo = "Hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por props ", () => {
    const saludo = "Hola, soy Goku";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    // El find es como el querryselector
    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
