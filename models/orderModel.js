import mongoose from 'mongoose'

//const reviewSchema = new mongoose.Schema(
//  {
//  name: { type: String, required: true },
//  comment: { type: String, required: true },
//  rating: { type: Number, required: true },
//},
// {
//  timestamps: true,
// }
//)

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        category: { type: String, required: true },
        title: { type: String, required: true },
        quantity: { type: Number },
        image: { type: String, require: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],

    shippingAddress: {
      fullName: { type: String },
      adress: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    paymentMethod: { type: String },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },

    itemsPrice: { type: Number },

    taxPrice: { type: Number },
    totalPrice: { type: Number },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User3',
    },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)
export default Order
