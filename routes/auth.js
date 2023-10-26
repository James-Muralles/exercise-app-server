import express from "express";
import { body } from 'express-validator';
import { login } from "../controllers/auth.js";

const router = express.Router();


const loginValidation = [
    body('username').isLength({ min: 2 }).withMessage('Username must be at least 2 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  ];
  
  // Route for logging in
  router.post('/login', loginValidation, login);
  
  export default router;