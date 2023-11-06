import express from "express";
import { createTemplate, getTemplates, getAllTemplates } from "../controllers/template.js";
import { verifyToken } from "../middlewares/auth.js";
const router = express.Router();

router.post('/templates', createTemplate);
router.get('/', verifyToken, getTemplates);
router.get('/all', getAllTemplates);
export default router;
