import {Router} from "express";


const router = Router();


router.get('/', (req, res) => {
    res.json("tic tac toe");
});

export default router;