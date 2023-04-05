import express from "express";
const router = express.Router();
import { postUsuario } from "../controllers/usuario.controller.js";
import { generarToken } from "../middlewares/jwt.js";

router.post("/api/usuario", postUsuario, (req, res) => {});

router.post("/api/login", generarToken, async (req, res) => {
  res.status(200).json({ code: 200, token: req.token });
});

export default router;
