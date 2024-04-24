import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()


// GET localhost:3000/profiles/:profileId
router.get('/:profileId', isLoggedIn, profilesCtrl.show)

// PUT localhost:3000/profiles/:profileId
router.put('/:profileId', isLoggedIn, profilesCtrl.update)

// GET localhost:3000/:profileId
router.get('/:profileId/edit', isLoggedIn, profilesCtrl.edit)

export {
  router
}