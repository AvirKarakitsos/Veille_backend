const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  // description: { type: String, required: true },
  // theme: [String],
  // source: { type: String, required: true },
  // link: { type: String, required: true },
  // language: { type: String, required: true },
  authorId: { type: mongoose.Types.ObjectId, ref: 'Author' },
  categoryId: { type: mongoose.Types.ObjectId, ref: 'Category' },
},
{ timestamps: true })

module.exports = mongoose.model('Post', postSchema)