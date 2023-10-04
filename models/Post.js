const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  theme: [String],
  source: { type: String, required: true },
  link: { type: String, required: true },
  language: { type: String, required: true },
  authorId: { type: Number, required: true },
  categoryId: { type: Number, required: true },
},
{ timestamps: true })

module.exports = mongoose.model('Post', postSchema)