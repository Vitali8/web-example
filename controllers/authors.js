const { author: AuthorModel } = require('../models');

const getData = async (req, res, next) => {
  req.app.get('db').query('SELECT * FROM authors LIMIT 100', function (err, rows) {
    if (err) throw err;

    res
      .status(200)
      .send(rows);
  });
};

const getDataS = async (req, res, next) => {
  const result = await AuthorModel.findAll();

  res
    .status(200)
    .send(result);
};

const getAuthor = async (req, res, next) => {
  console.log(req.user, req.params);

  const result = await AuthorModel.findByPk(req.params.authorId);
  res
    .status(200)
    .send(result);
};

const postAuthor = async (req, res, next) => {
  const result = await AuthorModel.create(req.query);

  res
    .status(200)
    .send(result.dataValues);
};

const putAuthor = async (req, res, next) => {
  const author = await AuthorModel.findByPk(req.params.authorId);

  const { query } = req;
  author.update(query);

  res
    .status(200)
    .send(author);
};

module.exports = {
  getData,
  getDataS,
  getAuthor,
  postAuthor,
  putAuthor
};
