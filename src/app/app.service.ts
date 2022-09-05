import { Request, Response } from 'express'

export class AppService {
  constructor() {}

  test(req: Request, res: Response) {
    res.send({
      response: {
        ok: {
          statusCode: 200,
          data: {},
        },
      },
    })
  }
}
