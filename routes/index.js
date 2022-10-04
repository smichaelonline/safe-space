import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  if (!req.user){
  res.render('welcome', { title: 'Welcome to Safe Space' })
  } else {
    res.render('home', {title: 'Home Page'})
  }
})

router.get('/help', function (req,res) {
  res.render('help', {title: 'Ask for Help'})
})

export {
  router
}
