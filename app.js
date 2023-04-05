import express from "express";
import { create } from "express-handlebars";
import routesViews from "./src/routes/views.routes.js";
import routesUsuario from "./src/routes/usuario.routes.js";
import routesPublicar from "./src/routes/publicar.routes.js";
import multer from "multer";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/public", express.static("public"));

//HANDLEBARS
const hbs = create({
  partialsDir: ["views/partials/"],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

//MULTER
const storage = multer.diskStorage({
  destination: path.join(__dirname, "/public/img"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
app.use(
  multer({
    storage,
    dest: path.join(__dirname, "/public/img"),
    limits: { fileSize: 1000000 },
  }).single("imagen")
);
//VISTAS ROUTERS
app.use(routesPublicar);
app.use(routesViews);
app.use(routesUsuario);

//Coneccion
app.listen(3000, () => console.log("http://localhost:3000/home"));
