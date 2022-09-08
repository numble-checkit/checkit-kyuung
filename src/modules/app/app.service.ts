import { Request, Response } from 'express'
import { httpSuccess } from '../../common/httpMessage/httpSuccess'

export class AppService {
  constructor() {}

  test(req: Request, res: Response) {
    httpSuccess.success({ res, message: 'test' })
  }
}
