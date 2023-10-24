import mongoose from 'mongoose';

const userIds = [
    new mongoose.Types.ObjectId(),
  ];

export const users = [

    {
        _id: userIds[0],
        firstName: "test",
        lastName: "me",
        email: "aaaaaaa@gmail.com",
        password: "1234",
        createdAt: 1115211422,
        updatedAt: 1115211422,
      },

]