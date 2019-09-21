const router = require('express').Router();
const routes = require('./strings/routes.js');
const { ShipController, LikeController } = require('./api.module');
const schemaValidators = require('./validators/schemaValidators.js');
const entityValidators = require('./validators/entityValidators.js');
const { ship } = require('../models');

// Ship API
router.get(routes.ship, ShipController.getAll.bind(ShipController));
router.post(
  routes.ship,
  schemaValidators.validateShipPayload,
  ShipController.postShip.bind(ShipController),
);

// Like API
router.post(
  routes.like,
  schemaValidators.validateLikePayload,
  entityValidators.validateExistence('ship', ship),
  LikeController.postLike.bind(LikeController),
);

module.exports = router;
