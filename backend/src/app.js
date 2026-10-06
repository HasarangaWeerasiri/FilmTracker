import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import filmsRouter from './routes/films.js'

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'film-tracker-api' })
})

app.use('/api/films', filmsRouter)

app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

app.use((error, _req, res, _next) => {
  console.error(error)
  res.status(error.status || 500).json({
    message: error.status ? error.message : 'Internal server error',
  })
})

export default app
