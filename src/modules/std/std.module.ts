import { StdController } from './std.controller'
import { StdService } from './std.service'

const stdService = new StdService()
export const stdController = new StdController(stdService)
