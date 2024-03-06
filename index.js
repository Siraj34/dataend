import express from 'express'

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRoutes from './routes/seedRoutes.js'
import productRouter from './routes/ProductRoutes.js'
import userRouter from './routes/userRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors())
app.options('*', cors())
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}
app.use(allowCrossDomain)
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected mongodb')
  })
  .catch((err) => {
    console.log(err.message)
  })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use('/api/seed', seedRoutes)

app.use('/api/posts', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server att http://localhost:${port}`)
})
