import express from 'express'
import data from './data.js'

import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
import cors from 'cors'

app.use(cors())
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected mongodb')
  })
  .catch((err) => {
    console.log(err.message)
  })

app.get('/api/posts', (req, res) => {
  res.send(data.products)
})

app.get('/api/posts/category/:category', (req, res) => {
  const product = data.products.find((x) => x.category === req.params.category)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product not found' })
  }
})

app.get('/api/posts/:id', (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product not found' })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server att http://localhost:${port}`)
})
