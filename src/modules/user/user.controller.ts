import express from 'express'
import { UserService } from './user.service'

export class UserController {
  public router = express.Router()

  constructor(private readonly userService: UserService) {}

  initRouter() {
    this.router.post('/v3/user/reg', this.userService.createUser)
    this.router.post('/v3/user/unreg', this.userService.deleteUser)
  }

  getRouter() {
    this.initRouter()
    return this.router
  }
}
