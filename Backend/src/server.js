import express from 'express'
const app = express()
import dotenv from "dotenv"
import cors from "cors"
import noteRoutes from './routes/notesRouter.js'
import connectDb from "./config/db.js"
import rateLimit from './middleware/rateLimit.js'
dotenv.config()



// middleware
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(rateLimit)

app.use('/api/notes',noteRoutes)



const PORT = process.env.PORT || 3000

connectDb().then(()=>{

    app.listen(PORT ,()=>console.log("The Port has running on " + PORT))
})
