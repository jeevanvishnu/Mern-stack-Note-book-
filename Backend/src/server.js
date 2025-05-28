import express from 'express'
import noteRoutes from './routes/notesRouter.js'
import connectDb from "./config/db.js"
const app = express()
import dotenv from "dotenv"
import rateLimit from './middleware/rateLimit.js'
dotenv.config()



// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(rateLimit)

app.use('/api/notes',noteRoutes)



const PORT = process.env.PORT || 3000

connectDb().then(()=>{

    app.listen(PORT ,()=>console.log("The Port has running on " + PORT))
})
