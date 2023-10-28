const multer = require('multer')

// const MIME_TYPES = {
//   'image/jpg': 'jpg',
//   'image/jpeg': 'jpg',
//   'image/png': 'png'
// }

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    let path = req.originalUrl.split('/api/')[1]
    if(path === "categories") callback(null, 'images/category')
    else if(path === "authors") callback(null, 'images/author')
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_')
    //const extension = MIME_TYPES[file.mimetype]
    callback(null, Date.now() + name)
  }
})

module.exports = multer({storage: storage}).single('image')