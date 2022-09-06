import express from 'express'
import { AuthService } from './auth.service'

class AuthController {
  public router = express.Router()

  constructor(private readonly authService: AuthService) {}

  initRouter() {
    this.router.post('/v3/auth/login', this.authService.login)
  }

  getRouter() {
    this.initRouter()
    return this.router
  }
}

export default AuthController
