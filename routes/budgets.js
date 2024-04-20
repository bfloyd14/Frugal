import { Router } from 'express'
import * as budgetsCtrl from '../controllers/budgets.js'

const router = Router()

router.get('/new', budgetsCtrl.new)


export {
  router
}
