// Para ver las ayudas en el editor agregamos este imp
import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("getSaludo debe de retornar hola Perla", () => {
    const nombre = "Perla";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test("getSaludo debe de retornar hola Carlos, si no hay argumento en el nombre", () => {
    const saludo = getSaludo();

    expect(saludo).toBe(`Hola Carlos`);
  });
});
