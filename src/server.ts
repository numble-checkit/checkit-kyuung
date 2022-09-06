import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import { appController } from './app/app.module'
import { authController } from './auth/auth.module'
import { userController } from './user/user.module'
import { doctorController } from './doctor/doctor.module'
import { stdController } from './std/std.module'

dotenv.config()

class Server {
  public app: express.Application
  public port: any
  public mongoUrl: any

  constructor() {
    const { PORT, MONGODB_URI } = process.env
    const app = express()

    this.port = PORT
    this.app = app
    this.mongoUrl = MONGODB_URI
  }

  private setRoute() {
    this.app.use(appController.getRouter())
    this.app.use(authController.getRouter())
    this.app.use(userController.getRouter())
    this.app.use(doctorController.getRouter())
    this.app.use(stdController.getRouter())
  }

  private connectDB() {
    mongoose
      .connect(this.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions)
      .then(() => console.log('MongoDB Connected'))
      .catch((error) => console.error(error))
  }

  private init() {
    this.setRoute()
  }

  listen() {
    this.init()
    this.connectDB()
    this.app.listen(this.port, () => {
      console.log(`listening on the port ${this.port}`)
    })
  }
}

const server = new Server()

server.listen()
