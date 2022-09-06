import AuthController from './auth.controller'
import { AuthService } from './auth.service'

const authService = new AuthService()
export const authController = new AuthController(authService)
