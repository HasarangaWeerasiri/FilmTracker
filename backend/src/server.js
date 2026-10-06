import 'dotenv/config'
import mongoose from 'mongoose'
import app from './app.js'

const port = Number(process.env.PORT) || 5000
const mongoUri = process.env.MONGODB_URI

if (!mongoUri) {
  throw new Error('MONGODB_URI is required')
}

try {
  await mongoose.connect(mongoUri)
  app.listen(port, () => {
    console.log(`FilmTracker API listening on http://localhost:${port}`)
  })
} catch (error) {
  console.error('Unable to connect to MongoDB:', error)
  process.exit(1)
}

const shutdown = async (signal) => {
  await mongoose.connection.close()
  console.log(`${signal}: MongoDB connection closed`)
  process.exit(0)
}

process.on('SIGINT', () => shutdown('SIGINT'))
process.on('SIGTERM', () => shutdown('SIGTERM'))
