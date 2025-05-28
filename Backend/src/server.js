import express from 'express'
import noteRoutes from './routes/notesRouter.js'
import connectDb from "./config/db.js"
const app = express()

connectDb()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/notes',noteRoutes)

import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT ,()=>console.log("The Port has running on " + PORT))
