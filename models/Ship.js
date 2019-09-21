/**
 * @file Model to describe Ship entity
 * @author vaninv
 */
const { Model } = require('sequelize');
const schema = require('./schemas/Ship.schema.js');

const modelName = 'ship';

class Ship extends Model {}

module.exports = (sequelize) => Ship.init(schema, {
  sequelize,
  modelName,
});
