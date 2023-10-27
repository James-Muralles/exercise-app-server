export const getExercises = async (req, res) => {
    try {
      const exercises = await Exercise.find();
  
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching exercises.' });
    }
  };