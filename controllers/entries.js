import { Entry } from '../models/entry.js'

function index(req, res){
  console.log("view all journals")
}

function newEntry (req,res){
  res.render('entries/new', {
    title: 'Add New Journal', 
  })
}

export {
  index, 
  newEntry as new, 
}