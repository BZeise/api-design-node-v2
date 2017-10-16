import express from 'express'
import userController from './user.controller'

export const userRouter = express.Router()

userRouter.param('id', userController.findByParam)
// this says: when you come in with a param, do something with that

userRouter.route('/')
  .get(userController.getAll)
  .post(userController.createOne)

userRouter.route('/:id')
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.createOne)
