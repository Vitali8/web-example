const BookModel = require('../models/book');

const getData = async (req, res, next) => {
  req.app.get('db').query('SELECT * FROM books LIMIT 100', function (err, rows) {
    if (err) throw err;

    res
      .status(200)
      .send(rows);
  });
};

const getDataS = async (req, res, next) => {
  const result = await BookModel.findAll();

  res
    .status(200)
    .send(result);
};

const getBook = (req, res, next) => {
  console.log(req.user, req.params);
  // res.send('test');

  const result = BookModel.findOne({
    where: { id: req.params.bookId },
    attributes: ['name', 'publicationDate']
  }).then(result => {
    res
      .status(200)
      .send(result);
  });
};

module.exports = {
  getData,
  getDataS,
  getBook
};