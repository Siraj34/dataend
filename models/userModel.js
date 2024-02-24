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

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, require: true },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User3', userSchema)
export default User
