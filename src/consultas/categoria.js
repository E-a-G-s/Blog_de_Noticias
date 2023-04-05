import db from "../db/db.js";

export const getCategorias = async () => {
  try {
    let consulta = "SELECT id, nombre FROM categorias order by nombre ASC";
    let resultado = await db.query(consulta);
    //  console.log(resultado.rows);
    return resultado.rows;
  } catch (error) {
    return console.log(error);
  }
};

export const getCategoriaTerror = async () => {
  try {
    let consulta =
      "SELECT * FROM publicaciones where nombrecategoria='Terror' order by fecha DESC";
    let resultado = await db.query(consulta);
    //  console.log(resultado.rows);
    return resultado.rows;
  } catch (error) {
    return console.log(error);
  }
};

export const getCategoriaSuspenso = async () => {
  try {
    let consulta =
      "SELECT * FROM publicaciones where nombrecategoria='Suspenso' order by fecha DESC";
    let resultado = await db.query(consulta);
    //  console.log(resultado.rows);
    return resultado.rows;
  } catch (error) {
    return console.log(error);
  }
};
