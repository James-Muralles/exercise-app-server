import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import User from './models/User.js'
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js";
import registerRoutes from "./routes/register.js";
import exerciseRoutes from "./routes/exercise.js";
import templateRoutes from "./routes/template.js";
import sessionRoutes from "./routes/session.js";
import {users, exercises, exercise, template,sessionData} from './data/data.js';
import Exercise from "./models/Exercise.js";
import Template from "./models/WorkoutTemplate.js";
import Session from "./models/WorkoutSession.js";

/*  CONFIGURATIONS */


dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json()) ;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


/* ROUTES */
app.use("/auth", authRoutes);
app.use("/auth", registerRoutes);
app.use('/api', userRoutes);
app.use('/exercise', exerciseRoutes); 
app.use('/templates', templateRoutes); 
app.use('/sessions', sessionRoutes); 





/* MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;
mongoose
.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async() =>{
    app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
    
    // User.createCollection()
    // .then((collection)=>{
    //     console.log(collection)
    // await mongoose.connection.db.dropDatabase();
    // User.insertMany(users);
    // await Exercise.deleteMany({})
    // Session.insertMany(sessionData);

    })
    
.catch((error) => console.log(`${error} did not connect`));