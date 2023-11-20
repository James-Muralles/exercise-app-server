import express from "express";
import { createSession, getSessions, deleteSession } from "../controllers/session.js";
import { verifyToken } from "../middlewares/auth.js";


const router = express.Router();

router.post('/sessions', createSession);
router.get('/', verifyToken, getSessions);
router.delete('/deleteSession/:id',verifyToken, deleteSession);
export default router;