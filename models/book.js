/* jshint indent: 2 */
const sequelize = require('./index');

module.exports = sequelize.import('book', function(sequelize, DataTypes) {
  const Book = sequelize.define('book', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    authorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    publicationDate: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: '1900'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'books'
  });

  Book.getAll = async () => {
    const result = await Book.findAll();

    return result.map(item => item.get());
  };

  Book.getItemById = (id, attributes) => {
    return Book.findByPk(id)/* {
      where: {id},
      attributes,
      include: [
        {
          model: sequelize.models.userGroup,
          attributes: ['name', 'publicationDate'],
        },
      ],
    }); */
  };

  return Book;
});
