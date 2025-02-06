import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const register=async(req,res)=>{
    try{
        const{fullname,email,phoneNumber,password,role}=req.body;
            if(!fullname ||!email ||!phoneNumber || !password || !role){
                return res.status(400).json({
                    message:"Something is missing",
                    success:false
                });
            };
            const user=await User.findOne({email});
            if(user){
                return res.status(400).json({
                    message:'User is Already exits with this email.',
                    succes:false,
                })
            }
            const hashedPassword=await bcrypt.hash(password,0);

            await User.create({
                fullname,
                email,
                phoneNumber,
                password:hashedPassword,
                role
            })
        }catch(error){

        }
    }
