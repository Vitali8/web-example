const { book: BookModel } = require('../models');

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

const getBook = async (req, res, next) => {
  console.log(req.user, req.params);

  const result = await BookModel.findOne({
    where: { id: req.params.bookId },
    attributes: ['name', 'publicationDate']
  });
  res
    .status(200)
    .send(result);
};

const postBook = async (req, res, next) => {
  const result = await BookModel.build(req.query).save();

  res
    .status(200)
    .send(result.dataValues);
};

const putBook = async (req, res, next) => {
  const book = await BookModel.findByPk(req.params.bookId);

  const { query } = req;
  book.update(query);

  res
    .status(200)
    .send(book);
};

module.exports = {
  getData,
  getDataS,
  getBook,
  postBook,
  putBook
};