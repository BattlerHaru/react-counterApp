import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../datos/heroes";
describe("Pruebas con promesas", () => {
  // las pruebas son sincronas, por eso se le agrega el callback done para que termine la prueba
  test("getHeroeByIdAsync Debe de retornar un heroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      // Por ello se le agrega el done para decirle que ya termino
      done();
    });
  });

  test("getHeroeByIdAsync Debe de retornar un error si el heroe por id no existe ", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
