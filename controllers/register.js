// auth.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register a user
export const register = async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = new User({
      firstName,
      lastName,
      username,
      password: passwordHash,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
