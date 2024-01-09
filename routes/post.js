const express = require('express')
const postController = require('../controllers/post')

const router = express.Router()
router.get('/', postController.get)
router.get('/all', postController.getAll)
router.get('/:id', postController.getOnePost)

router.post('/', postController.postPost)

router.put('/:id', postController.updatePost)

router.delete('/:id', postController.deletePost)


module.exports = router