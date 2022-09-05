import express from 'express'
import { appController } from './app/app.module'
import { authController } from './auth/auth.module'
import { userController } from './user/user.module'
import { doctorController } from './doctor/doctor.module'
import { stdController } from './std/std.module'

class Server {
  public app: express.Application
  public port: number

  constructor(port: number) {
    const app: express.Application = express()
    this.app = app
    this.port = port
  }

  private setRoute() {
    this.app.use(appController.getRouter())
    this.app.use(authController.getRouter())
    this.app.use(userController.getRouter())
    this.app.use(doctorController.getRouter())
    this.app.use(stdController.getRouter())
  }

  listen() {
    this.setRoute()
    this.app.listen(this.port, () => {
      console.log(`listening on the port ${this.port}`)
    })
  }
}

const server = new Server(8000)

server.listen()
