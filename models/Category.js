const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  title: { type: String, required: true },
  logo: { type: String },
})

module.exports = mongoose.model('Category', categorySchema)