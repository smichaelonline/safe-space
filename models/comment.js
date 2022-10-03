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

const Comment = mongoose.model('Comment', commentSchema)

export {
  Comment
}