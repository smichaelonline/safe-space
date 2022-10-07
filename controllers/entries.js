import { Entry } from '../models/entry.js'

function index(req, res){
  Entry.find({private:false})
  .populate('authorId')
  .then(entries => {
    res.render('entries/index', {
      entries, 
      title: 'Your Community'
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
  req.body.private = !!req.body.private
  req.body.authorId = req.user.profile._id
  Entry.create(req.body)
  .then(entry => {
    res.redirect(`/entries/${entry._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function show(req,res){
  Entry.findById(req.params.id)
  .populate('authorId')
  .populate('comments.authorId')
  .then(entry => {
    //entry.date = moment().format('MMMM Do YYYY').entry.date
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

function journalIndex(req,res) {
  Entry.find({authorId: req.user.profile._id})
  .then(entries => {
    res.render('entries/yourJournal', {
      entries, 
      title: 'Your Journal'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function createComment(req,res) {
  req.body.authorId = req.user.profile._id
  Entry.findById(req.params.id)
  .then(entry => {
    entry.comments.push(req.body)
    entry.save()
    res.redirect(`/entries/${entry._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function deleteComment(req,res) {
  Entry.findById(req.params.id)
  .then(entry => {
    entry.comments.remove(req.params.commentId)
    entry.save()
    res.redirect(`/entries/${entry._id}`)
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
  journalIndex, 
  createComment,
  deleteComment, 
}