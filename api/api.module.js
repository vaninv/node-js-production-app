/**
 * @module api/api.module.js
 * @description Container for api module artifacts
 */
const { ship, like, sequelize } = require('../models');
const ShipController = require('./controllers/ShipController.js');
const LikeController = require('./controllers/LikeController.js');
const LikeService = require('./services/LikeService.js');

const likeServiceInstance = new LikeService(ship, like, sequelize);

module.exports = {
  ShipController: new ShipController(ship),
  LikeController: new LikeController(likeServiceInstance),
  LikeService: likeServiceInstance,
};
