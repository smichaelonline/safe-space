import { Router } from 'express'

const router = Router()

import * as entriesCtrl from '../controllers/entries.js'

router.get('/', entriesCtrl.index)
router.get('/new', entriesCtrl.new)

export {
  router
}