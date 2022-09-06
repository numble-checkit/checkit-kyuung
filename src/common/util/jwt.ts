import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

interface IJwt {
  payload: string
  iat: number
  exp: number
}

class Jwt {
  private jwtKey: any
  private jwtHash: any

  constructor() {
    const { JWT_KEY, JWT_HASH } = process.env

    this.jwtKey = JWT_KEY
    this.jwtHash = JWT_HASH
  }

  public createToken(payload: string) {
    return jwt.sign({ payload }, this.jwtKey, {
      algorithm: this.jwtHash,
      expiresIn: '1h',
    })
  }

  public verifyToken(token: string) {
    const decoded: any = jwt.verify(token, this.jwtKey)

    return decoded
  }
}

export const jwtToken = new Jwt()
