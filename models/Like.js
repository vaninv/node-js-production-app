/**
 * @file Model to describe Ship entity
 * @author vaninv
 */
const { Model } = require('sequelize');
const schema = require('./schemas/Like.schema.js');

const modelName = 'like';

class Like extends Model {}

module.exports = (sequelize) => Like.init(schema, {
  sequelize,
  modelName,
});
