import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    // toEqual analiza las propiedades
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nickname = "Juan";

    const user = getUsuarioActivo(nickname);

    const usuarioActivoTest = {
      uid: "ABC567",
      username: nickname,
    };

    // toEqual analiza las propiedades
    expect(user).toEqual(usuarioActivoTest);
  });
});
