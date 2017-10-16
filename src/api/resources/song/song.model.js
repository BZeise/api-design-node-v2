import mongoose from 'mongoose'

export const schema = {
  title: {
    type: String,
    required: [true, 'Songs need titles!']
  },
  url: {
    type: String,
    unique: true,
    required: [true, 'Songs need a link bro!']
  },
  album: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  favorite: {
    type: Boolean,
    required: true
  }
}

const songSchema = new mongoose.Schema(schema)

export const Song = mongoose.model('song', songSchema)
