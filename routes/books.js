const router = require('express').Router();

const { getData, getDataS } = require('../controllers/books');

router.get('/', getData);
router.get('/sequelize', getDataS);

module.exports = router;
