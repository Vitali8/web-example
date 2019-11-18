// const fs = require('fs');
// const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('library', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mariadb',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  dialectOptions: {
    useUTC: false,
    timezone: 'Etc/GMT0',
  },
  logging: false,
});

module.exports = sequelize;

// const db = {};
//
// // Load Models
// fs.readdirSync(__dirname)
//   .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
//   .forEach(file => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });
//
// // Associate Models
// Object.keys(db).forEach(modelName => db[modelName].associate && db[modelName].associate(db));
//
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
//
// module.exports = db;
