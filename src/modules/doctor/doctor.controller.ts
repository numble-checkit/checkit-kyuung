import express from 'express'
import { DoctorService } from './doctor.service'

export class DoctorController {
  public router = express.Router()

  constructor(private readonly doctorService: DoctorService) {}

  initRouter() {
    this.router.get('/v3/doctor/list', this.doctorService.getDoctorList)
    this.router.get('/v3/doctor/:id', this.doctorService.getCurrDoctor)
  }

  getRouter() {
    this.initRouter()
    return this.router
  }
}
