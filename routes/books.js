const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

router.get('/', booksController.getData);
router.get('/:bookId', booksController.getBook);
router.get('/sequelize', booksController.getDataS);

module.exports = router;
