import { Request, Response } from 'express'
import { httpException } from '../../common/httpMessage/httpException'
import { httpSuccess } from '../../common/httpMessage/httpSuccess'
import { Doctor } from './doctor.schema'

export class DoctorService {
  constructor() {}

  public async getDoctorList(req: Request, res: Response) {
    try {
      const doctorList = await Doctor.find(
        {},
        {
          _id: 0,
          doctor_id: 1,
          doctor_display_name: 1,
          doctor_image_url: 1,
          hospital_name: 1,
          hospital_addr: 1,
          description: 1,
        }
      )
      return httpSuccess.success({ res, message: '의사 목록 조회에 성공했습니다.', data: { doctorList } })
    } catch (err) {
      console.log(err)
    }
  }

  public async getCurrDoctor(req: Request, res: Response) {
    try {
      const { id } = req.params
      const doctorInfo = await Doctor.findOne({ id }, { _id: 0, __v: 0 })
      return httpSuccess.success({ res, message: '의사 조회에 성공했습니다.', data: { doctor_info: doctorInfo } })
    } catch (err) {
      console.log(err)
    }
  }

  public async createDoctor(req: Request, res: Response) {
    const data = req.body
    const isId = await Doctor.findOne({ doctor_id: data.doctor_id })
    const isName = await Doctor.findOne({ doctor_display_name: data.doctor_display_name })
    const isTel = await Doctor.findOne({ doctor_tel: data.doctor_tel })
    if (isId) return httpException.error(res, '동일한 ID가 존재합니다.')
    if (isName) return httpException.error(res, '동일한 이름이 존재합니다.')
    if (isTel) return httpException.error(res, '동일한 핸드폰번호가 존재합니다.')

    try {
      await Doctor.create(data)
      httpSuccess.created({ res, message: '의사 등록에 성공했습니다.', data })
    } catch (err) {
      console.log(err)
    }
  }
}
