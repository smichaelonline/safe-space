import mongoose from "mongoose";

const Schema = mongoose.Schema

const entrySchema = new Schema({ 
  title: String, 
  date:{
    type: Date,
    default: new Date(),
  }, 
  text: String,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {
  timestamps: true
})

const Entry = mongoose.model('Entry', entrySchema)

export {
  Entry
}