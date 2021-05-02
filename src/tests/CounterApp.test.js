import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";

describe("<CounterApp/>", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe de mostrar <CounterApp/> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el valor por defecto de 100", () => {
    const valor = 100;
    const wrapper = shallow(<CounterApp value={valor} />);

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe(valor.toString());
  });
  test("Debe de incrementar con el boton +1 ", () => {
    const firstCounterText = wrapper.find("h2").text().trim();

    const btn2 = wrapper.find("button").at(2);

    btn2.simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe((Number(firstCounterText) + 1).toString());
  });

  test("Debe de decrementar con el boton -1 ", () => {
    const firstCounterText = wrapper.find("h2").text().trim();

    const btn0 = wrapper.find("button").at(0);

    btn0.simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe((Number(firstCounterText) - 1).toString());
  });

  test("Debe de colocar el valor por defecto con el boton de reset", () => {
    // inicia en 10 por defecto
    const valor = 100;
    // Actualizamos a 100
    const wrapper = shallow(<CounterApp value={valor} />);

    // Este boton deberia de restar 1
    // 100 - 1 = 99
    const btn0 = wrapper.find("button").at(0);
    btn0.simulate("click");

    // Este boton deberia reiniciar el valor al valor inicial a 100
    const btn1 = wrapper.find("button").at(1);
    btn1.simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe(valor.toString());
  });
});
