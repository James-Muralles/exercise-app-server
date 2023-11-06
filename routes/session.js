import express from "express";
import { createSession, getSessions } from "../controllers/session.js";

const router = express.Router();

router.post('/sessions', createSession);
router.get('/sessions', getSessions);
export default router;