/**
 * @file Schema definition for Ship model
 * @author vaninv
 * @see models/Ship.js
 */
const { STRING, BIGINT } = require('sequelize');

module.exports = {
  title: {
    type: STRING,
    unique: true,
  },
  likes: BIGINT,
};
