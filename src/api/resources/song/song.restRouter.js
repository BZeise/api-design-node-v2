import express from 'express'
import songController from './song.controller'

export const songRouter = express.Router()

songRouter.param('id', songController.findByParam)
// this says: when you come in with a param, do something with that

songRouter.route('/')
  .get(songController.getAll)
  .post(songController.createOne)

songRouter.route('/:id')
  .get(songController.getOne)
  .put(songController.updateOne)
  .delete(songController.createOne)
