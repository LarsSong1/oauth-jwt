import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import cors from 'cors'
import AuthRoutes from './src/routes/auth.js'

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json());  
connectDB()


app.use(cors());
app.use('/api', AuthRoutes)




app.listen(PORT, ()=> {
    console.log(`Servidor Corriendo en el puerto ${PORT}`)
})

