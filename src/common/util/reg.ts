class Reg {
  private minPw: number
  private maxPw: number
  private nameLength: number

  constructor() {
    this.minPw = 8
    this.maxPw = 13
    this.nameLength = 5
  }

  public isName(input: string) {
    const reg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]{1,5}$/
    return reg.test(input)
  }

  public isPassword(input: string) {
    const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,13}$/
    return reg.test(input)
  }

  public isEmail(input: string) {
    const reg = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
    return reg.test(input)
  }

  public isEmpty(input: string) {
    return input.length > 0
  }
}

export const reg = new Reg()
