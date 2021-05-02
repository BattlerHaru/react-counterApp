import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../datos/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("Debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe de retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroesDC = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroesDC).toEqual(heroesData);
  });

  test("Debe de retornar un arreglo de 2 con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroesM = getHeroesByOwner(owner);

    expect(heroesM.length).toBe(2);
  });
});
