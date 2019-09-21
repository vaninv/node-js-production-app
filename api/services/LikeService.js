/**
 * @module api/services/LikeService.js
 * @description service to manage likes
 */
const { EventEmitter } = require('events');

class LikeService {
  constructor(shipModel, likeModel, sequelize) {
    this.shipModel = shipModel;
    this.likeModel = likeModel;
    this.sequelize = sequelize;
    this.eventEmitter = new EventEmitter();
  }

  like(shipId, value) {
    // There is no checking for ship existence, it's done by middleware
    return this.sequelize.transaction(async (transaction) => {
      const ship = await this.shipModel.findByPk(shipId, {
        transaction,
        lock: { of: this.shipModel },
      });
      const like = await this.likeModel.create({
        value,
        ship_id: ship.id,
      }, { transaction });

      ship.likes += like.value;

      await ship.save({ transaction });

      return like;
    }).then((like) => {
      this.eventEmitter.emit('like', like.get({ plain: true }));

      return like;
    });
  }
}

module.exports = LikeService;
