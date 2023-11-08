import express from "express";
import { createTemplate, getTemplates, getAllTemplates, editTemplate, createTemplate } from "../controllers/template.js";
import { verifyToken } from "../middlewares/auth.js";
const router = express.Router();

router.post('/templates', createTemplate);
router.get('/', verifyToken, getTemplates);
router.get('/all', getAllTemplates);
router.get('/delete', deleteTemplate);
router.get('/edit', editTemplate);
export default router;
