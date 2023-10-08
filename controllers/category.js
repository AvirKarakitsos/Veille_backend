const Category = require('../models/Category')

exports.getAll = (req, res, next) => {
    Category.find()
    .then(categories => res.status(200).json(categories))
    .catch(error => res.status(400).json({ error }))
}

exports.postCategory = (req, res, next) => {
    const categoryObject = JSON.parse(req.body.category)
    const post = new Category({
        ...categoryObject,
        logo: `${req.protocol}://${req.get('host')}/images/category/${req.file.filename}`
    })
    post.save()
        .then(() => res.status(201).json({ message: 'Saved'}))
        .catch(error => res.status(400).json({ error }));
  }