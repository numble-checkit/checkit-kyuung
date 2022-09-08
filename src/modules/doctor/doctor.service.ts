import { Request, Response } from 'express'
import { httpSuccess } from '../../common/httpMessage/httpSuccess'
import { Doctor } from './doctor.schema'

export class DoctorService {
  constructor() {}

  public async getDoctorList(req: Request, res: Response) {
    try {
      const doctorList = await Doctor.find({})

      return httpSuccess.success({ res, message: '의사 목록 조회에 성공했습니다.', data: { doctorList } })
    } catch (err) {
      console.log(err)
    }
  }

  getCurrDoctor(req: Request, res: Response) {}

  public async createDoctor(req: Request, res: Response) {
    const data = req.body

    try {
      await Doctor.create(data)
      httpSuccess.created({ res, message: '의사 등록에 성공했습니다.', data })
    } catch (err) {
      console.log(err)
    }
  }
}
