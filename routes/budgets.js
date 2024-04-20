import { Router } from 'express'
import * as budgetsCtrl from '../controllers/budgets.js'

const router = Router()

// GET localhost:3000/budgets/new
router.get('/new', budgetsCtrl.new)

// POST localhost:3000/budgets/create
router.post('/', budgetsCtrl.create)

export {
  router
}
