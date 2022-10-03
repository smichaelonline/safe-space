import mongoose from 'mongoose'
import { Entry } from './entry.js'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  entries: [{type: Schema.Types.ObjectId, ref: 'Entry'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
