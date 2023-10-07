const Post = require('../models/Post')

exports.getAll = (req, res, next) => {
    //?sort=asc&page=1
    //console.log(req.query) 
    Post.find().populate(['categoryId','authorId'])
    .then(posts => res.status(200).json({ posts }))
    .catch(error => res.status(400).json({ error }))
}

exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
    .then(post => res.status(200).json({ post }))
    .catch(error => res.status(404).json({ error }))
}

exports.postPost = (req, res, next) => {
    const post = new Post({
      ...req.body
    })
    post.save()
    .then(() => res.status(201).json({ message: "Posted" }))
    .catch(error => res.status(400).json({ error }))
}

exports.updatePost = (req, res, next) => {
    Post.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified'}))
    .catch(error => res.status(400).json({ error }))
}

exports.deletePost = (req, res, next) => {
    Post.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Deleted'}))
    .catch(error => res.status(400).json({ error }))
}

