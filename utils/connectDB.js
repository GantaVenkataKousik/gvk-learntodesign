import mongoose from 'mongoose'
import reviews from '../models/userReviews'
const connection = {}

export const connect = async (req, res) => {
  try {
    console.log('Connecting to MongoDB...')
    await mongoose.connect(
      'mongodb+srv://GantaVenkataKousik:VKousik330066@cluster0.kslyn8z.mongodb.net/',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  } catch (err) {
    console.log('error connecting to MongoDB:', err)
  }
}

async function disconnect () {
  if (connection.isConnected) {
    try {
      await mongoose.disconnect()
      connection.isConnected = false
    } catch (err) {
      console.log('not disconnected')
    }
  }
}

function convertDocToObj (doc) {
  doc._id = doc._id.toString()
  doc.createdAt = doc.createdAt.toString()
  doc.updatedAt = doc.updatedAt.toString()
  return doc
}
