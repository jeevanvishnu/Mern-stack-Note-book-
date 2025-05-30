import express from 'express'
const app = express()
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
import noteRoutes from './routes/notesRouter.js'
import connectDb from "./config/db.js"
import rateLimit from './middleware/rateLimit.js'
dotenv.config()

const __dirname = path.resolve()

// middleware
if(process.env.NODE_ENV !== "production"){

    app.use(cors({
        origin:"http://localhost:5173"
    }))
}
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(rateLimit)

app.use('/api/notes',noteRoutes)


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../Frontend/dist")))

    app.use('*',(req , res)=>{
        res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"))
    })
}

const PORT = process.env.PORT || 3000

connectDb().then(()=>{

    app.listen(PORT ,()=>console.log("The Port has running on " + PORT))
})
