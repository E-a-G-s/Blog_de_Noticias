import express from "express";
const router = express.Router();
import { postPublicacion } from "../controllers/publicar.controller.js";
//import { upload } from "../middlewares/upload.js";

//import { upload } from "../middlewares/upload.js";

router.post("/api/publicar", postPublicacion, async (req, res) => {});

export default router;
