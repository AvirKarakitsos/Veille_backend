const Post = require('../models/Post')
const { pagination } = require('../utils/pagination')

exports.getAll = (req, res) => {
    Post.find().populate(['categoryId','authorId'])
    .then((posts) => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }))
}

exports.get = (req, res, next) => {
    Post.find().populate(['categoryId','authorId'])
    .then((posts) => {
        let result = posts

        if(req.query.categoryId) {
            result = result.filter((post) => post.categoryId._id.toString() === req.query.categoryId) 
        } 
        if(req.query.search) {
            let regex = new RegExp(req.query.search,"i") //i = uppercase and lowercase

            result = result.filter((post) => {
                let reg = /é|è|ê/g 
                let replaceStr = post.title.replace(reg, "e")
                return regex.test(post.title) || regex.test(replaceStr)
            })
        }
        
        let resultPaginated = pagination(result, req.query.page, 4)
        res.status(200).json(resultPaginated)
    })
    .catch(error => res.status(400).json({ error }))
}

exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id }).populate(['categoryId','authorId'])
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }))
}

exports.postPost = (req, res, next) => {
    let post = req.body
    let test = post.link.includes("youtube.com")
    let newPost = null

    if(test) {
        let newLink = post.link.replace("watch?v=","embed/")
        newPost = new Post({
          ...post,
          link: newLink
        })
    } else {
        newPost = new Post({
          ...post,
        })
    }
    
    newPost.save()
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

