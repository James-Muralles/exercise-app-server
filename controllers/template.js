import Template from "../models/WorkoutTemplate.js";
import Exercise from "../models/Exercise.js";

export const createTemplate = async (req, res) => {
    try {
      // Get data from the request body
      const { name, exerciseIds } = req.body;
  
      const exercises = await Exercise.find({ _id: { $in: exerciseIds } });
  
      if (exercises.length !== exerciseIds.length) {
        return res.status(400).json({ error: 'Invalid exercise IDs provided' });
      }
  
      const template = new Template({
        name,
        exercises: exerciseIds,
      });
  
      // Save the template to the database
      const savedTemplate = await template.save();
  
      res.status(201).json(savedTemplate);
    } catch (error) {
      console.error('Error creating template:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
  