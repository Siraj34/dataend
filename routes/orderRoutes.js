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

orderRouter.put(
  '/:id/pay',
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
      order.isPaid = true
      order.paidAt = Date.now()
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      }
      const updatedOrder = await order.save()
      res.send({ message: 'Order Paid', order: updatedOrder })
    } else {
      res.send(404).send({ message: 'Order Not Found' })
    }
  })
)

export default orderRouter
