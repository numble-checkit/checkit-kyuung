import express from 'express'
import { AppService } from './app.service'

class AppController {
  public router = express.Router()

  constructor(private readonly appService: AppService) {}

  initRouter() {
    this.router.get('/v3/test', this.appService.test)
  }

  getRouter() {
    this.initRouter()
    return this.router
  }
}

export default AppController
