import { StdService } from './std.service'
import express from 'express'

export class StdController {
  public router = express.Router()

  constructor(private readonly stdService: StdService) {}

  initRouter() {
    this.router.get('/v3/std/reg', this.stdService.postRegister)
  }

  getRouter() {
    this.initRouter()
    return this.router
  }
}
