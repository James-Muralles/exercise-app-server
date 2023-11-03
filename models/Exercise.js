import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        type: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        muscle: {
            type: String,
            required: true,
            min: 2,
        },
        equipment: {
            type: String,
            min: 2,
        },
        difficulty: {
            type: String,
            min: 5,
        },
        instructions: {
            type: String,
            min: 5,
        },
        exerciseId: {
            type: String,
            required: true,
            min: 1,
        },
     },
     { timestamps: true, toJSON: { getters: true } }
    );

    const Exercise = mongoose.model('Exercise', exerciseSchema);

    export default Exercise;