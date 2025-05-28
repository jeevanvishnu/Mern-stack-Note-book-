import express from 'express'
import noteRoutes from './routes/notesRouter.js'
const app = express()

app.use('/api/notes',noteRoutes)

import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT ,()=>console.log("The Port has running on " + PORT))
