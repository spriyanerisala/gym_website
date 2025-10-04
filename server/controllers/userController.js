import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const register = async (req,res)=>{

    try{
         const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({success:false,message:"All fields are required"})
    }
    
    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(400).json({success:false,message:"User Already Exists"})
    }
   
    const hashedPassword =await  bcrypt.hash(password,10)

    const user = new User({name,email,password:hashedPassword})
    await user.save()

     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

   
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token
    });

    }catch(err){
console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
    }
   
}

export const login =async(req,res)=>{
    try{
         const {email,password} = req.body;
    if(!email | !password){
        return res.status(400).json({success:false,message:"All fields are required"})
    }
    
    const existingUser = await User.findOne({email})
    if(!existingUser){
        return res.status(404).json({success:false,message:"User not Exists"})
    }
   
    const isMatch= bcrypt.compare(password,existingUser.password)
   
    if(!isMatch){
        return res.json({success:false,message:"Invalid Credentials"})
    }


    const token = jwt.sign({id:existingUser._id},process.env.JWT_SECRET,{
        expiresIn:'7d'
    })

   res.status(200).json({success:true,message:"Login Successfully",user:{
    id:existingUser._id,
    name:existingUser.name,
    email:existingUser.email
   },
   token
})

    }catch(err){
   console.log(err)
   return res.status(500).json({success:false,message:"Server Error"})
    }
     
}