import express from 'express'
import playlistController from './playlist.controller'

export const playlistRouter = express.Router()

playlistRouter.param('id', playlistController.findByParam)
// this says: when you come in with a param, do something with that

playlistRouter.route('/')
  .get(playlistController.getAll)
  .post(playlistController.createOne)

playlistRouter.route('/:id')
  .get(playlistController.getOne)
  .put(playlistController.updateOne)
  .delete(playlistController.createOne)
