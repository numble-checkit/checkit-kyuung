import TestController from './test.controller'
import { TestService } from './test.service'

const testService = new TestService()
export const testController = new TestController(testService)
