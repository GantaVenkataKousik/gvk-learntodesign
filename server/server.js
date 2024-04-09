import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'
import mongoose from 'mongoose'

//intailising expresss

const app = express()

//middlewares
// Enables Cross-Origin Resource Sharing for your server.
app.use(cors())
// Parses JSON data in incoming requests.
app.use(express.json())
// Logs HTTP requests in a developer-friendly format.
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

async function connectDB (req, res) {
  try {
    console.log('Connecting to MongoDB...')
    await mongoose
      .connect(
        'mongodb+srv://GantaVenkataKousik:VKousik330066@cluster0.kslyn8z.mongodb.net/',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      )
      .then(() => {
        console.log('Connected to MongoDB')
      })
  } catch (err) {
    console.log('error connecting to MongoDB:', err)
  }
}
connectDB()

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

const reviews = mongoose.model('reviews', reviewSchema)

app.get('/fetchPosts', async (req, res) => {
  try {
    const posts = await reviews.find()
    return res.status(200).json(posts)
  } catch (err) {
    console.error(err) // Corrected from console(err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.post('/addReview', async (req, res) => {
  try {
    const { name, email, review } = req.body
    console.log(name, email, review)
    const newReview = new reviews({
      name,
      email,
      review
    })
    await newReview.save()
    return res.status(201).json(newReview)
  } catch (err) {
    console.error(err) // Corrected from console(err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(9002, () => {
  console.log(
    `Server running on ${9002} Mode on the Port ${process.env.PORT}`.bgBlue
  )
})
