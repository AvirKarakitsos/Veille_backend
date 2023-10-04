const express = require('express')
const categoryController = require('../controllers/category')
const multer = require("../middlewares/multer-config")

const router = express.Router()

router.get('/', categoryController.getAll)
router.post('/', multer, categoryController.postCategory)


module.exports = router