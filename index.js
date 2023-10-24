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
import {users} from './data/data.js';

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
app.use('/api', userRoutes); // You can specify your own API version or path




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

    })
    
.catch((error) => console.log(`${error} did not connect`));