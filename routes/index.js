const appRoute = require('./app');
const usersRoute = require('./users');
const booksRoute = require('./books');
const authorsRoute = require('./authors');
const messagesRoute = require('./messages');

module.exports = app => {
  app.use('/', appRoute);
  app.use('/books', booksRoute);
  app.use('/users', usersRoute);
  app.use('/authors', authorsRoute);
  app.use('/messages', messagesRoute);
};
