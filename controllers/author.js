const Author = require('../models/Author')
const Post = require('../models/Post')

exports.getAll = (req, res, next) => {
    Author.find()
    .then(authors => res.status(200).json(authors))
    .catch(error => res.status(400).json({ error }))
}

exports.getPosts = (req, res, next) => {
    Post.find().populate(['categoryId','authorId'])
    .then((posts) => {
        let tabFilter = posts.filter((post) => post.authorId._id.toString() === req.params.id)
        res.status(200).json(tabFilter)
    })
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