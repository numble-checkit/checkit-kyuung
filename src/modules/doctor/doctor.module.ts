import { DoctorService } from './doctor.service'
import { DoctorController } from './doctor.controller'

const doctorService = new DoctorService()
export const doctorController = new DoctorController(doctorService)
