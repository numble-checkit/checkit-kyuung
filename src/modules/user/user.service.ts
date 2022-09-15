import { Request, Response } from 'express'
import * as bcrypt from 'bcrypt'
import { User } from './user.schema'
import { jwtToken } from '../../common/util/jwt'
import { httpSuccess } from '../../common/httpMessage/httpSuccess'
import { reg } from '../../common/util/reg'
import { httpException } from '../../common/httpMessage/httpException'

export class UserService {
  constructor() {}

  public async createUser(req: Request, res: Response) {
    const { email, key, name } = req.body
    try {
      if (!email || !key || !name) return httpException.error(res, '모든 항목을 입력해주세요.')

      if (!reg.isEmail(email)) return httpException.error(res, '이메일을 규격에 맞게 작성해주세요.')
      if (!reg.isPassword(key)) return httpException.error(res, '패스워드는 영어 대소문자로 8~13자입니다.')
      if (!reg.isName(name)) return httpException.error(res, '이름은 영어, 한글로 1~5글자 입니다. ')

      const existsEmail = await User.exists({ email })
      if (existsEmail) return httpException.error(res, '이미 중복된 이메일이 존재합니다.')

      const existsName = await User.exists({ name })
      if (existsName) return httpException.error(res, '이미 중복된 닉네임이 존재합니다.')

      const hashedPassword = await bcrypt.hash(key, 10)
      await User.create({ email, key: hashedPassword, name })

      const token = jwtToken.createToken(email)
      return httpSuccess.created({ res, message: '계정이 생성되었습니다.', data: { token } })
    } catch (err) {
      console.log(err)
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(' ')[1] || ''
      const email = jwtToken.verifyToken(token).payload

      if (email) {
        const existsName = await User.exists({ email })
        if (!existsName) return httpException.error(res, '해당 계정이 존재하지 않습니다.')
        await User.deleteOne({ email })
        return httpSuccess.success({ res, message: '계정을 성공적으로 삭제하였습니다.' })
      }
    } catch (err) {
      console.log(err)
    }
  }
}
