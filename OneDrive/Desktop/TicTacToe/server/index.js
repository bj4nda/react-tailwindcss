import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import gameRoute from './routes/game.js'

mongoose.set('strictQuery', false);
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/game", gameRoute);

const MONGO_URI = "mongodb+srv://bharathjinda:jt0WtZlEsrCLvqx9@cluster0.nimqc5k.mongodb.net/tic-tac-toe?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3001

const connectDB = async() => {
    try{
        await mongoose.connect(MONGO_URI, {})
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    } catch(err){
        console.error("Connection to MongoDB failed", err.message);
    }
}
connectDB();

mongoose.connection.on("open", () => console.log("Connection to database opened"));
mongoose.connection.on("error", (err) => console.log(err));

/*  */

