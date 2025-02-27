import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDatabase from './config/database.js';
import userRouter from './routes/userRoute.js';

const app = express();
const corsOptions = {
    origin: true,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRouter)
connectToDatabase();


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});