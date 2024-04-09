import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Reviews =
  mongoose.models.Reviews || mongoose.model('Reviews', reviewSchema)
export default Reviews
