import db from '../utils/connectDB'
import Reviews from '../models/userReviews'

async function fetchPosts () {
  try {
    await db.connect()
    const posts = await Reviews.find()
    db.disconnect()
    return posts
  } catch (error) {
    db.disconnect()
    return { error }
  }
}

async function createPost (doc) {
  try {
    await db.connect()
    const post = new Reviews(doc)
    await post.save()
    db.disconnect()
    return { post }
  } catch (error) {
    db.disconnect()
    return { error }
  }
}

const reviews = { fetchPosts, createPost }
export default reviews
