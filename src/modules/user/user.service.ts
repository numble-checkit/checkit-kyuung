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

  public async deleteUser(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(' ')[1]
      if (!token) return res.status(400).send({ message: 'token' })

      const decoded = jwtToken.verifyToken(token)
      if (decoded) {
        await User.deleteOne({ email: decoded.payload })
        return res.send({ message: '성공적으로 삭제' })
      }
      return res.status(400).send({ message: '유효하지 않은 토큰' })
    } catch (err) {
      console.log(err)
    }
  }
}
