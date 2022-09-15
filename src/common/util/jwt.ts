import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

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
    try {
      const decoded: any = jwt.verify(token, this.jwtKey)
      return decoded
    } catch (err) {
      return false
    }
  }
}

export const jwtToken = new Jwt()
