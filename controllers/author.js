const Author = require('../models/Author')

exports.getAll = (req, res, next) => {
    Author.find()
    .then(authors => res.status(200).json(authors))
    .catch(error => res.status(400).json({ error }))
}

exports.postAuthor = (req, res, next) => {
    const authorObject = JSON.parse(req.body.author)
    const author = new Author({
        ...authorObject,
        image: `${req.protocol}://${req.get('host')}/images/author/${req.file.filename}`
      })
      
      author.save()
      .then(() => res.status(201).json({ message: "Saved" }))
      .catch(error => res.status(400).json({ error }))
  }