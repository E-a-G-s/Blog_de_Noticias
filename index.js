import app from "./app.js";
import { sequelize } from "./src/db/db.js";

///Modelos tablas
import "./src/consultas/categoria.js";
import "./src/consultas/publicar.js";
import "./src/consultas/usuario.js";

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Nos hemos conectado con éxito a la Base de Datos");
    await sequelize.sync({ force: true });
    let PORT = 3000;
    app.listen(PORT, () =>
      console.log("Servidor escuchando en http://localhost:" + PORT)
    );
  } catch (error) {
    console.log(
      "Ha ocurrido un error en la coneccion a la Base de Datos: ",
      error
    );
  }
};

main();
