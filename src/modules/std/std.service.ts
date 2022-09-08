import { Request, Response } from 'express'
import { httpException } from '../../common/httpMessage/httpException'
import { httpSuccess } from '../../common/httpMessage/httpSuccess'
import { Std } from './std.schema'

export class StdService {
  constructor() {}

  public async postRegister(req: Request, res: Response) {
    const { doctor_id, address, address_code, store_address } = req.body
    try {
      if (!doctor_id || !address || !address_code || !store_address)
        return httpException.error(res, '모든 항목을 입력해주세요.')
      await Std.create(req.body)
      httpSuccess.created({ res, message: '검사 신청에 성공했습니다.', data: req.body })
    } catch (err) {
      console.log(err)
    }
  }
}
