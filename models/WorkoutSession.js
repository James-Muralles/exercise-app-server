import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sessionSchema = new Schema(
  {
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
    
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Session = mongoose.model('Session', sessionSchema);

export default Session;
