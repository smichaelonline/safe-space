import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

import * as entriesCtrl from '../controllers/entries.js'

router.get('/', isLoggedIn ,entriesCtrl.index)
router.get('/new', isLoggedIn ,entriesCtrl.new)
router.get('/:id', isLoggedIn ,entriesCtrl.show)
router.get('/:id/edit', isLoggedIn, entriesCtrl.edit)
router.post('/', isLoggedIn ,entriesCtrl.create)
router.put('/:id', isLoggedIn, entriesCtrl.update)
router.delete('/:id', isLoggedIn, entriesCtrl.delete)


export {
  router
}