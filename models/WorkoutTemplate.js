import mongoose from 'mongoose';
import Exercise from './Exercise.js';

const Schema = mongoose.Schema;

const templateSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      exercises: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Exercise',
        }
      ],
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
      },
    },
    { timestamps: true, toJSON: { getters: true } }
  );
  
  const Template = mongoose.model('Template', templateSchema);
  
  export default Template;