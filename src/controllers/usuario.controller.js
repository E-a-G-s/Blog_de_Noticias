import { registrarUsusario } from "../consultas/usuario.js";
import { v4 as uuid } from "uuid";

export const postUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    let nuevoUsuario = {
      id: uuid().slice(0, 5),
      nombre,
      email,
      password,
    };
    // console.log(nuevoUsuario);
    const result = await registrarUsusario(nuevoUsuario);
    res.status(200).json({ data: result, message: "Agregado correctamente." });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "Ha fallado el intento de registro." });
  }
};
