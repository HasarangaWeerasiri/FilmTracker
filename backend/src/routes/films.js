import { Router } from 'express'
import mongoose from 'mongoose'
import Film from '../models/Film.js'

const router = Router()

const isValidId = (id) => mongoose.isValidObjectId(id)

router.get('/', async (_req, res, next) => {
  try {
    const films = await Film.find().sort({ createdAt: -1 })
    res.json(films)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid film id' })
    }

    const film = await Film.findById(req.params.id)
    if (!film) {
      return res.status(404).json({ message: 'Film not found' })
    }

    res.json(film)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const film = await Film.create(req.body)
    res.status(201).json(film)
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message })
    }
    next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid film id' })
    }

    const film = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!film) {
      return res.status(404).json({ message: 'Film not found' })
    }

    res.json(film)
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message })
    }
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid film id' })
    }

    const film = await Film.findByIdAndDelete(req.params.id)
    if (!film) {
      return res.status(404).json({ message: 'Film not found' })
    }

    res.status(204).send()
  } catch (error) {
    next(error)
  }
})

export default router
