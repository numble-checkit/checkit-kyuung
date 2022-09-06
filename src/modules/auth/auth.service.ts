import * as bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { jwtToken } from '../../common/util/jwt'
import { User } from '../user/user.schema'

export class AuthService {
  constructor() {}

  async login(req: Request, res: Response) {
    try {
      const { email, key } = req.body
      const user = await User.findOne({ email })
      if (!user) return res.send({ message: '이메일을 확인해주세요.' })

      const isPasswordValidated = await bcrypt.compare(key, user.key)
      if (!isPasswordValidated) return res.send({ message: '비밀번호를 확인해주세요.' })

      const token = jwtToken.createToken(email)

      return res.send({
        success: {
          statusCode: 200,
          json: {
            status: 'ok',
            data: {
              token,
            },
          },
        },
      })
    } catch (error: any) {
      res.status(400).send(error)
    }
  }
}
