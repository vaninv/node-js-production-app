/* eslint-disable */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ships', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      likes: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ships');
  }
};
