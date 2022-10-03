import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Welcome to Safe Space' })
})

export {
  router
}
