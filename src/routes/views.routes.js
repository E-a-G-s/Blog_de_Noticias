import express from "express";
const router = express.Router();
import {
  getCategorias,
  getCategoriaTerror,
  getCategoriaSuspenso,
} from "../consultas/categoria.js";
import { getDb } from "../consultas/publicar.js";
import { getDetalleId } from "../controllers/publicar.controller.js";

router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/login", async (req, res) => {
  res.render("login");
});
router.get("/registrar", (req, res) => {
  res.render("registrar");
});
router.get("/publicar", async (req, res) => {
  const result = await getCategorias();
  res.render("publicar", { categorias: result });
});

router.get("/publicaciones", async (req, res) => {
  try {
    const result = await getDb();
    res.render("publicaciones", { publicaciones: result });
  } catch (error) {
    console.log(error);
  }
});

router.get("/terror", async (req, res) => {
  try {
    const result = await getCategoriaTerror();
    res.render("terror", { terror: result });
  } catch (error) {
    console.log(error);
  }
});
router.get("/suspenso", async (req, res) => {
  try {
    const result = await getCategoriaSuspenso();
    res.render("suspenso", { suspenso: result });
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/publicar/:id", getDetalleId, async (req, res) => {});

router.get("/detalles", async (req, res) => {
  res.render("detalles");
});

export default router;
