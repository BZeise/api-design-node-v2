import mongoose from 'mongoose'

export const schema = {
  title:  {
    type: String,
    required: true
  },
  songs: {
    type: Array,
    required: true
  },
  favorite: {
    type: Boolean,
    required: true
  }
}

const playlistSchema = new mongoose.Schema(schema)

export const Playlist = mongoose.model('playlist', playlistSchema)
