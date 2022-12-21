import express from 'express'
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console/log("server is ruuning on port 3001");
});

app.post("/signup", (req, res) => {

    const {Yourname, username, email, password}= req.body;
    

})