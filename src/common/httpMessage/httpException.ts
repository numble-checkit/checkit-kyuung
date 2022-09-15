import { Response } from 'express'
import { logger } from '../../config/winston'

class HttpException {
  constructor() {}

  unauthorized(res: Response) {
    logger.error(res)
    return res.status(401).send({ code: 401, message: '유효한 계정이 아닙니다.' })
  }

  error(res: Response, message: string) {
    logger.error(res)
    return res.status(400).send({ code: 400, message })
  }
}

export const httpException = new HttpException()
