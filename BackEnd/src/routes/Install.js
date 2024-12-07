import express from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/SuperUser.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get("/install", async (req, res) => {
    try{
        console.log("Install Route");

        const hashedPassword = await bcrypt.hash(process.env.SUPER_PASSWORD, 10);

        console.log("Hashed Password: ");

        await UserModel.create({email: process.env.SUPER_EMAIL, password: hashedPassword});
    }catch(e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
})

export default router;