import mongoose from 'mongoose';

const UserSchema =  new mongoose.Schema(
    {
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    username: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
 },
 { timestamps: true, toJSON: { getters: true } }
);

const User = mongoose.model('User', UserSchema);
export default User;