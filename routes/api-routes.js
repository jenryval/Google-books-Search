  const router = require('express').Router()

const booksController = require('../controller/booksController')

router.route("/api/books")
.get(booksController.getBooks)
.post(booksController.createBooks)

router.route('/api/books/:id')
.get(booksController.getBook)
.delete(booksController.deleteBook)



module.exports = router