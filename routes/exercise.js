import express from 'express';
import { getExercises } from '../controllers/exercises.js';

const router = express.Router();

router.get('/exercises', getExercises);

export default router;