/**
 * @file Schema definition for Ship model
 * @author vaninv
 * @see models/Ship.js
 */
const { INTEGER } = require('sequelize');

module.exports = {
  ship_id: INTEGER,
  value: INTEGER,
};
