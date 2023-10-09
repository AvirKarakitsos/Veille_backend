const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
  name: { type: String, required: true },
  language: { type: String, required: true },
  image: { type: String },
})

module.exports = mongoose.model('Author', authorSchema)