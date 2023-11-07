import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sessionSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    template: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Template', 
      required: true,
    },
    exercises: [
      {
        exercise: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Exercise', 
          required: true,
        },
        reps: {
          type: Number,
          required: true,
        },
        duration: {
          type: String,
          required: true,
        },
        notes: {
          type: String,
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
      
    ],
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Session = mongoose.model('Session', sessionSchema);

export default Session;
