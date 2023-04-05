import db from "../db/db.js";

export const registrarPublicacion = async (publicacion) => {
  try {
    console.log(publicacion.imagen);
    let consulta = await db.query(
      "INSERT INTO publicaciones(id,titulo,contenido,fecha,nombreCategoria,nombreUsuario,imagen) VALUES($1, $2, $3,$4,$5,$6,$7)",
      [
        publicacion.id,
        publicacion.titulo,
        publicacion.contenido,
        publicacion.fecha,
        publicacion.nombreCategoria,
        publicacion.nombreUsuario,
        publicacion.imagen.originalname,
      ]
    );
    //console.log(consulta.rows);
    return consulta.rows;
  } catch (error) {
    return console.log(error);
  }
};

export const getDb = async () => {
  try {
    let consulta = "SELECT * FROM publicaciones order by fecha DESC";
    let resultado = await db.query(consulta);
    console.log(resultado.rows);
    return resultado.rows;
  } catch (error) {
    return console.log(error);
  }
};

export const getDetalles = async (id) => {
  try {
    let consulta = await db.query(
      "SELECT titulo,contenido,fecha,nombrecategoria,nombreusuario,imagen FROM publicaciones WHERE id=$1",
      [id]
    );

    return consulta.rows;
  } catch (error) {
    return console.log(error);
  }
};
