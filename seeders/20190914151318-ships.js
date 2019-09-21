module.exports = {
  up: (queryInterface) => {
    const date = new Date();

    return queryInterface.bulkInsert('ships', [{
      title: 'Zodiak',
      createdAt: date,
      updatedAt: date,
    }, {
      title: 'Aurora',
      createdAt: date,
      updatedAt: date,
    }]);
  },

  down: (queryInterface) => queryInterface.bulkDelete('ships'),
};
