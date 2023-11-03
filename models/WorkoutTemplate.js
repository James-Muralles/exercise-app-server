import mongoose from 'mongoose';
import Exercise from './Exercise';

const Schema = mongoose.Schema;

const templateSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        exercises: [Exercise]
        
     },
     { timestamps: true, toJSON: { getters: true } }
    );

    const Template = mongoose.model('Template', templateSchema);

    export default Template;