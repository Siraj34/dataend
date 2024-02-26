import expres from 'express'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils.js'
import expresAsynHandler from 'express-async-handler'
import expressAsyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

const orderRouter = expres.Router()
orderRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,

      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.body.user,
    })
    const order = await newOrder.save()
    res.status(201).send({ message: 'NEW Order Created', order })
  })
)

export default orderRouter
