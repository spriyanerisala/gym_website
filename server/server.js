import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import userRouter from './routes/userRoute.js'
import membershipRouter from './routes/membershipRoute.js'
import  exportMembershipRoute  from './routes/exportMembershipRoute.js'
dotenv.config()


const app=express()
await connectDB()

app.use(express.json())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
}))

const port=process.env.PORT

app.get('/',(req,res)=>{
    res.send("GYM Website is Working...")
})

app.use('/api/user',userRouter)
app.use('/api/membership',membershipRouter)
app.use('/api',exportMembershipRoute)

app.listen(port,()=>{
    console.log(`Server is running on the port : ${port}`)
})