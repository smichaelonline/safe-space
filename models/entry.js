import { text } from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema

const entrySchema = new Schema({ 
  date: Date, 
  text: String,
  comments: [CommentSchema], 
}, {
  timestamps: true
})

const Entry = mongoose.model('Entry', entrySchema)

export {
  Entry
}