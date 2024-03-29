const express = require('express')
const postRoutes = require('./routes/post')
const categoryRoutes = require('./routes/category')
const authorRoutes = require('./routes/author')
const path = require("path")
const swaggerUi = require('swagger-ui-express')
const yaml = require('js-yaml');
const fs   = require('fs');

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json()) //intercepte toutes les requêtes qui ont un content-type json


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

// Get document, or throw exception on error
const swaggerDoc = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));

app.use('/api/posts', postRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/authors', authorRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use('/images', express.static(path.join(__dirname, 'images')))

module.exports = app