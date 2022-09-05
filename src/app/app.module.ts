import AppController from './app.controller'
import { AppService } from './app.service'

const appService = new AppService()
export const appController = new AppController(appService)
