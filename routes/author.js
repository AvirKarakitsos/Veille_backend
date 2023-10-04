const express = require('express')
const authorController = require('../controllers/author')
const multer = require("../middlewares/multer-config")

const router = express.Router()
router.get('/', authorController.getAll)
router.post('/', multer, authorController.postAuthor)


module.exports = router