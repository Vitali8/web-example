const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

router.get('/:bookId', booksController.getBook);
router.post('/', booksController.postBook); // creating new
router.put('/:bookId', booksController.putBook); // updating existing

module.exports = router;
