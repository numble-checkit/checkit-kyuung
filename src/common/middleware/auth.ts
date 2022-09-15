import { Request, Response, Router, NextFunction } from 'express'
import { httpException } from '../httpMessage/httpException'
import { jwtToken } from '../util/jwt'

export class AuthMiddleware {
  public router = Router()
  constructor() {}

  async verify(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) return httpException.unauthorized(res)
    const decoded = jwtToken.verifyToken(token)
    if (!decoded) return httpException.unauthorized(res)

    next()
  }

  initRouter() {
    this.router.post('/v3/user/unreg', this.verify)
    this.router.get('/v3/doctor/*', this.verify)
    this.router.post('/v3/std/reg', this.verify)
  }

  getRouter() {
    this.initRouter()
    return this.router
  }
}
