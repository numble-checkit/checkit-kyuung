import { Response } from 'express'

interface ISuccess {
  res: Response
  message: string
  data?: any
}

class HttpSuccess {
  constructor() {}

  created({ res, message, data }: ISuccess) {
    res.status(201).send({ code: 201, message, data })
  }

  success({ res, message, data }: ISuccess) {
    res.status(200).send({ code: 200, message, data })
  }
}

export const httpSuccess = new HttpSuccess()
