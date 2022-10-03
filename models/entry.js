import mongoose from "mongoose";

const Schema = mongoose.Schema

const commentSchema = new Schema({ 
  authorId: {type: Schema.Types.ObjectId, ref:'Profile'},
  date:{
    type: Date,
    default: new Date(),
  }, 
  text: String, 
}, {
  timestamps: true
})

const entrySchema = new Schema({ 
  title: String, 
  date:{
    type: Date,
    default: new Date(),
  }, 
  text: String,
  authorId: {type: Schema.Types.ObjectId, ref:'Profile'},
  comments: [commentSchema], 
  private: Boolean, 
}, {
  timestamps: true
})

const Entry = mongoose.model('Entry', entrySchema)

export {
  Entry
}