const express = require('express');
const router = express.Router();

const authorsController = require('../controllers/authors');

router.get('/', authorsController.getData);
router.get('/sequelize', authorsController.getDataS);

module.exports = router;
