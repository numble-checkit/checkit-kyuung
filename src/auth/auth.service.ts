import { Request, Response } from 'express'

export class AuthService {
  constructor() {}

  login(req: Request, res: Response) {
    try {
      const data = req.body
      console.log(req.body)
      res.status(200).send({ success: 'data' })
    } catch (error: any) {
      res.status(400).send(error)
    }
  }
}
