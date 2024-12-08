import express from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/SuperUser.js';
import Post from "../models/Post.js";
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get("/install", async (req, res) => {
    try{
        console.log("Install Route");

        const hashedPassword = await bcrypt.hash(process.env.SUPER_PASSWORD, 10);

        console.log("Hashed Password: ");

        await UserModel.create({email: process.env.SUPER_EMAIL, password: hashedPassword});
        
        const posts = [{
            username: "Victor",
            contribution: 10,
            timeAgo: "1 hora atrás"
        },{
            username: "Mauricio",
            contribution: 20,
            timeAgo: "2 horas atrás"
        },{
            username: "Kodi",
            contribution: 30,
            timeAgo: "3 horas atrás"
        },{
            username: "Leandro",
            contribution: 40,
            timeAgo: "4 horas atrás"
        },{
            username: "Eduardo",
            contribution: 50,
            timeAgo: "1 dia atrás"
        }]
        await Post.insertMany(posts)
        console.log("Inserted Posts");
    }catch(e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
})

export default router;