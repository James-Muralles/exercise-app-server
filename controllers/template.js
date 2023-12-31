import Template from "../models/WorkoutTemplate.js";
import Exercise from "../models/Exercise.js";


export const createTemplate = async (req, res) => {
    try {
      // Get data from the request body
      const { name, exercises, user } = req.body
      // console.log(req.body);
      // console.log(name);
  
      const exerciseList = await Exercise.find({ _id: { $in: exercises } });
      // console.log(exerciseList);
  
      if (exerciseList.length !== exercises.length) {
        return res.status(400).json({ error: 'Invalid exercise IDs provided' });
      }
  
      const template = new Template({
        name,
        exercises: exercises,
        user: user
      });
      console.log(template)
  
      // Save the template to the database
      const savedTemplate = await template.save();
  
      res.status(201).json(savedTemplate);
    } catch (error) {
      console.error('Error creating template:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const getTemplates = async (req, res) => {
    try {
      console.log(req.user)
      const templates = await Template.find({ user: req.user.id.toString() });
      await Template.populate(templates, { path: 'exercises', model: 'Exercise', select: 'name type muscle description category difficulty instructions' })
      res.status(200).json(templates);
    } catch (error) {
      console.error('Error getting templates:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

export const getAllTemplates = async (req, res) => {
  try {
    const templates = await Template.find();
    res.status(200).json(templates);
  } catch (error) {
    console.error("Error getting templates:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editTemplate = async (req, res) => {
  try {
    const { name, exercises, user } = req.body;
    const templateId = req.params.id;
    console.log(req)
    
    const existingTemplate = await Template.findById(templateId);
    // console.log("here___",existingTemplate._id,"there___",templateId,"where___", user) 

    if (!existingTemplate) {
      return res.status(404).json({ error: 'Template not found' });
    }

    if (existingTemplate.user.toString() !== user) {
      return res.status(403).json({ error: 'Permission denied' });
    }

    const exerciseList = await Exercise.find({ _id: { $in: exercises } });

    if (exerciseList.length !== exercises.length) {
      return res.status(400).json({ error: 'Invalid exercise IDs provided' });
    }

    existingTemplate.name = name;
    existingTemplate.exercises = exercises;

    const updatedTemplate = await existingTemplate.save();

    res.status(200).json(updatedTemplate);
  } catch (error) {
    console.error('Error editing template:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTemplate = async (req, res) =>{
  try{
    const templateId = req.params.id;
    const user = req.user.id;
    console.log("Current Template",user);

    
    const existingTemplate = await Template.findById(templateId);
    console.log("Existing", existingTemplate)

    if(!existingTemplate){
      ;

      return res.status(404).json({error: 'Template not found'});
    }
    if(existingTemplate.user.toString() !== user){
      return res.status(403).json({error: 'Permmission Denied'});

    }

    await existingTemplate.deleteOne()
    
    res.status(204).end();
  } catch(error){ 
    console.error('Error deleting templae:', error);
    res.status(500).json({error:'Internal server error'});
  }
};


  
  
  