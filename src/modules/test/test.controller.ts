import express from 'express'
import { TestService } from './test.service'

class TestController {
  public router = express.Router()

  constructor(private readonly testService: TestService) {}

  initRouter() {
    this.router.get('/v3/test', this.testService.test)
  }

  getRouter() {
    this.initRouter()
    return this.router
  }
}

export default TestController
