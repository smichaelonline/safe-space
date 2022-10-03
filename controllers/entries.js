import { Entry } from '../models/entry.js'

function index(req, res){
  Entry.find({})
  .then(entries => {
    res.render('entries/index', {
      entries, 
      title: 'Your Journal'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function newEntry (req,res){
  res.render('entries/new', {
    title: 'Add New Journal', 
  })
}

function create(req,res){
  Entry.create(req.body)
  .then(entry => {
    res.redirect('/entries')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function show(req,res){
  Entry.findById(req.params.id)
  .then(entry => {
    res.render('entries/show', {
      entry, 
      title: 'Journal Entry'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function edit(req,res){
  Entry.findById(req.params.id)
  .then(entry => {
    res.render('entries/edit', {
      entry,
      title: 'Update your journal'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function update(req,res){
  Entry.findByIdAndUpdate(req.params.id, req.body)
  .then(entry => {
      res.redirect(`/entries/${entry._id}`)
    })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function deleteEntry(req,res){
  Entry.findByIdAndDelete(req.params.id)
  .then(entry => {
    res.redirect('/entries')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

export {
  index, 
  newEntry as new, 
  create, 
  show,
  edit,
  update,
  deleteEntry as delete, 
}