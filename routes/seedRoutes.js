import expres from 'express'
import Product from '../models/ProductModel.js'
import data from '../data.js'
import User from '../models/userModel.js'
const seedRoutes = expres.Router()

seedRoutes.get('/', async (req, res) => {
  const CreateProduct = await Product.insertMany(data.productData)

  const CreateUser = await User.insertMany(data.users)

  res.send({ CreateUser, CreateProduct })
})

export default seedRoutes
