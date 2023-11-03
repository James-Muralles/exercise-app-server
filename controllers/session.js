import Template from '../models/WorkoutTemplate.js';
import Session from '../models/WorkoutSession.js';

export const createSession = async (req, res) => {
    try {
      
      const { name, templateId } = req.body;
  
      
      const template = await Template.findById(templateId);
  
      if (!template) {
        return res.status(400).json({ error: 'Invalid template ID provided' });
      }
  
      
      const session = new Session({
        name,
        template: templateId,
        completed: completed || false,
      });
  
    
      const savedSession = await session.save();
  
      res.status(201).json(savedSession);
    } catch (error) {
      console.error('Error creating session:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
 