import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'

const app = express()
app.use(morgan('dev'))
app.use(cors())
//permite leer la respuesta json del request, ademas debe ir antes de las rutas
app.use(express.json())
app.use(userRoutes)

export default app
