import mongoose from 'mongoose'

const connection = {}

async function connect () {
  if (connection.isConnected) {
    return
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === 1) {
      return
    }
    await mongoose.disconnect()
  }
  const db = await mongoose.connect(process.env.MONGODO_URL)
  connection.isConnected = db.connections[0].readyState
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

const db = { connect, disconnect, convertDocToObj }
export default db