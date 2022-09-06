import { Request, Response } from 'express'
import * as bcrypt from 'bcrypt'
import { User } from './user.schema'
import { jwtToken } from '../../common/util/jwt'

export class UserService {
  constructor() {}

  public async createUser(req: Request, res: Response) {
    const { email, key, name } = req.body

    const isUser = await User.exists({ email })
    if (isUser) res.send({ message: '중복' })
    const hashedPassword = await bcrypt.hash(key, 10)
    await User.create({ email, key: hashedPassword, name })

    const token = jwtToken.createToken(email)

    return res.send({
      success: {
        statusCode: 200,
        json: {
          status: 'ok',
          data: {
            token,
            email,
            name,
          },
        },
      },
    })
  }

  deleteUser(req: Request, res: Response) {}
}
