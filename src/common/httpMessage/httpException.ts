import { Response } from 'express'

class HttpException {
  constructor() {}

  unauthorized(res: Response) {
    res.status(401).send({ code: 401, message: '유효한 계정이 아닙니다.' })
  }

  error(res: Response, message: string) {
    res.status(400).send({ code: 400, message })
  }
}

export const httpException = new HttpException()
