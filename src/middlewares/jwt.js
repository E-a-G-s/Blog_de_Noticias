import jwt from "jsonwebtoken";

import { loginUsuario } from "../consultas/usuario.js";

const SECRETO = "estoesunsecreto";

export const generarToken = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    let usuario = await loginUsuario(email, password);

    console.log(usuario, "en el middlewareee");
    // console.log(usuario, "en el middlewareee");
    if (!usuario) {
      return res
        .status(401)
        .json({ code: 401, message: "Debe proporcionar un usuario válido." });
    }
    const token = jwt.sign({ usuario }, SECRETO);
    req.token = token;
    next();
    req.usuario = usuario;
  } catch (error) {
    return res
      .status(500)
      .json({ code: 500, message: "ha fallado la autenticación." });
  }
};
