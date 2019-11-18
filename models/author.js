/* jshint indent: 2 */
const sequelize = require('./index');

module.exports = sequelize.import('author', function(sequelize, DataTypes) {
  const Author = sequelize.define('author', {
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
    surname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    patronymic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pseudonym: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'authors'
  });

  Author.getAll = async () => {
    const result = await Author.findAll();

    return result.map(item => item.get());
  };

  Author.getItemById = (id, attributes) => {
    return Author.findOne({
      where: {id},
      attributes,
      include: [
        {
          model: sequelize.models.userGroup,
          attributes: ['surname', 'name', 'patronymic'],
        },
      ],
    });
  };

  return Author;
});
