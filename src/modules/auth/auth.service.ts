import { httpSuccess } from './../../common/httpMessage/httpSuccess'
import { httpException } from './../../common/httpMessage/httpException'
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
      console.log(user)
      if (!user) return httpException.error(res, '이메일이 존재하지 않습니다.')

      const isPasswordValidated = await bcrypt.compare(key, user.key)
      if (!isPasswordValidated) return httpException.error(res, '비밀번호를 확인해주세요')

      const token = jwtToken.createToken(email)

      return httpSuccess.success({ res, message: '로그인 되었습니다.', data: { token } })
    } catch (err: any) {
      console.log(err)
    }
  }
}
