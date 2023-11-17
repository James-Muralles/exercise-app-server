import Template from '../models/WorkoutTemplate.js';
import Session from '../models/WorkoutSession.js';

export const createSession = async (req, res) => {
    try {
      
      const { name, template, completed, user, exercises } = req.body;
  
      
      const templates = await Template.findById(template);
      console.log(template)
  
      if (!templates) {
        return res.status(400).json({ error: 'Invalid template ID provided' });
      }
  
      
      const session = new Session({
        user, 
        name,
        exercises,
        template: template,
        completed: completed || false,
      });
  
    
      const savedSession = await session.save();
  
      res.status(201).json(savedSession);
    } catch (error) {
      console.error('Error creating session:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user.id.toString() })
      .populate('template', 'name')
      .populate({
        path: 'exercises.exercise',
        select: 'name',
      });
    res.status(200).json(sessions);
  } catch (error) {
    console.error('Error getting sessions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



  
  
  
 