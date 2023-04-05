import { registrarPublicacion, getDetalles } from "../consultas/publicar.js";
import { v4 as uuid } from "uuid";

export const postPublicacion = async (req, res) => {
  try {
    const { titulo, contenido, nombreCategoria, nombreUsuario } = req.body;

    console.log(titulo, contenido, nombreCategoria, nombreUsuario);
    const imagen = req.file;

    if (!titulo || !contenido || !nombreCategoria || !nombreUsuario) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    let today = new Date();
    let nuevaPublicacion = {
      id: uuid().slice(0, 5),
      titulo,
      contenido,
      fecha: today.toLocaleString(),
      nombreCategoria,
      nombreUsuario,
      imagen,
    };
    console.log(nuevaPublicacion);
    const result = await registrarPublicacion(nuevaPublicacion);
    res.status(200).json({ data: result, message: "Agregado correctamente." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, message: "Ha fallado el intento de registro." });
  }
};

export const getDetalleId = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    const result = await getDetalles(id);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error, message: "NO EXISTE " });
  }
};
