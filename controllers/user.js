import User from '../models/User.js';

// Controller to get all users
export const getUsers = async (req, res) => {
  try {
    // Find all users in the database
    const users = await User.find();

    // Respond with the list of users
    res.status(200).json(users);
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
};
