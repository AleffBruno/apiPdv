import dotenv from "dotenv";
dotenv.config(); 

export default {
    secret: process.env.APP_SECRET,
    expiresIn: '1d'
}