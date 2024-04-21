import { Router } from 'express'
import * as budgetsCtrl from '../controllers/budgets.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/budgets/index
router.get('/', isLoggedIn, budgetsCtrl.index)

// GET localhost:3000/budgets/new
router.get('/new', isLoggedIn, budgetsCtrl.new)

// POST localhost:3000/budgets/create
router.post('/', isLoggedIn, budgetsCtrl.create)

// POST localhost:3000/budgets/:budgetId
router.delete('/:budgetId', isLoggedIn, budgetsCtrl.delete)

// GET localhost:3000/budgets/:budgetId
router.get('/:budgetId', budgetsCtrl.show)

export {
  router
}
