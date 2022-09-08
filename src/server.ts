import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import { appController } from './modules/app/app.module'
import { authController } from './modules/auth/auth.module'
import { userController } from './modules/user/user.module'
import { doctorController } from './modules/doctor/doctor.module'
import { stdController } from './modules/std/std.module'
import { specs } from './config/swagger'
import { authMiddleware } from './common/middleware'

dotenv.config()

class Server {
  private app: express.Application
  private port: any
  private mongoUrl: any

  constructor() {
    const { PORT, MONGODB_URI } = process.env
    const app = express()

    this.port = PORT
    this.app = app
    this.mongoUrl = MONGODB_URI
  }

  private setPreMiddleware() {
    this.app.use(authMiddleware.getRouter())
  }

  private setRoute() {
    this.app.use(express.json())
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

  private connectSwagger() {
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
  }

  private init() {
    this.setPreMiddleware()
    this.setRoute()
    this.connectDB()
    this.connectSwagger()
  }

  listen() {
    this.init()
    this.app.listen(this.port, () => {
      console.log(`listening on the port ${this.port}`)
    })
  }
}

const server = new Server()

server.listen()
