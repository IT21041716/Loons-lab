import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import { fileURLToPath } from "url";
import path from "path";



const app = express();
const PORT = process.env.PORT || 5000;

const filePath = fileURLToPath(import.meta.url);
const dirName = path.dirname(filePath);
app.use(express.static(path.join(dirName, "uploads")));

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

});

app.listen(PORT, () => {
    console.log("***************************************");
    console.log(`Server Running on port number : ${PORT}`);
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MONGO_DB Connection successfull......!!");
    console.log("***************************************");
});


//user
import user from './Routes/user-routes.js'
app.use('/User', user)