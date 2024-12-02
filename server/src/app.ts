import express from 'express'
import dotnev from 'dotenv'
import { conectToMongo } from './config/db'
import addselection from './router/selectionRouter'

import cors from 'cors'
dotnev.config()

const PORT = process.env.PORT || 3000
const app = express()
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
conectToMongo()
app.use(express.json())

app.use("/api/selection",addselection)


app.listen(PORT,()=>{
    console.log(`Server is running, visit ""http://localhost:${PORT}"`);  
})
