import express from "express";
import { createSession, getSessions } from "../controllers/session.js";
import { verifyToken } from "../middlewares/auth.js";


const router = express.Router();

router.post('/sessions', createSession);
router.get('/', verifyToken, getSessions);
export default router;