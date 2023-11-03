import express from "express";
import { createTemplate } from "../controllers/template.js";
const router = express.Router();

router.post('/templates', createTemplate);
export default router;
