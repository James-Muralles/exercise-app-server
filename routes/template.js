import express from "express";
import { createTemplate, getTemplates, getAllTemplates, editTemplate, deleteTemplate} from "../controllers/template.js";
import { verifyToken } from "../middlewares/auth.js";
const router = express.Router();

router.post('/templates', createTemplate);
router.get('/', verifyToken, getTemplates);
router.get('/all', getAllTemplates);
router.delete('/delete/:id',verifyToken, deleteTemplate);
router.patch('/edit/:id',verifyToken,editTemplate);
export default router;
