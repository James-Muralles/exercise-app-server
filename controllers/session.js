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

export const deleteSession = async (req, res) =>{
  try{
    const sessionId = req.params.id;
    const user = req.user.id;
    console.log("Current Session",sessionId);

    
    const existingSession = await Session.findById(sessionId);
    console.log("Existing", existingSession)

    if(!existingSession){
      ;

      return res.status(404).json({error: 'Session not found'});
    }
    if(existingSession.user.toString() !== user){
      return res.status(403).json({error: 'Permmission Denied'});

    }

    await existingSession.deleteOne()
    
    res.status(204).end();
  } catch(error){ 
    console.error('Error deleting session:', error);
    res.status(500).json({error:'Internal server error'});
  }
};



  
  
  
 