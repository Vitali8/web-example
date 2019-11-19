const express = require('express');
const router = express.Router();

const authorsController = require('../controllers/authors');

router.get('/:authorId', authorsController.getAuthor);
router.post('/', authorsController.postAuthor); // creating new
router.put('/:authorId', authorsController.putAuthor); // updating existing

module.exports = router;
