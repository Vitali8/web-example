const appRoute = require('./app');
const bookRoute = require('./book');
const booksRoute = require('./books');
const authorRoute = require('./author');
const authorsRoute = require('./authors');

module.exports = app => {
  app.use('/', appRoute);
  app.use('/book', bookRoute);
  app.use('/books', booksRoute);
  app.use('/author', authorRoute);
  app.use('/authors', authorsRoute);
};
