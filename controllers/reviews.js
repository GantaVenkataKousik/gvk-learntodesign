import db from '../utils/connectDB'
import reviewsColl from '../models/userReviews'

export const fetchPosts = async () => {
  try {

    return posts
  } catch (error) {
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
