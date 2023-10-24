import express from 'express';
import { getUsers } from '../controllers/user.js';

const router = express.Router();

// Define a route to get all users
router.get('/users', getUsers);

export default router;