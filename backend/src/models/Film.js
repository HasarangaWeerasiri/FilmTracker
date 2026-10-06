import mongoose from 'mongoose'

const filmSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    year: { type: Number, min: 1888, max: 3000 },
    genre: [{ type: String, trim: true }],
    status: {
      type: String,
      enum: ['watchlist', 'watching', 'watched'],
      default: 'watchlist',
    },
    rating: { type: Number, min: 0, max: 5 },
    notes: { type: String, trim: true, maxlength: 5000 },
  },
  { timestamps: true },
)

export default mongoose.model('Film', filmSchema)
