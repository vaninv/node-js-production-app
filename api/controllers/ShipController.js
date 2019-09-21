/**
 * @module api/controllers/ShipController.js
 * @description Controller for "ship" endpoints
 * @author vaninv
 */
const { Op } = require('sequelize');

/**
 * @class ShipController
 */
class ShipController {
  /**
   * @param {Object} shipModel Ship model implementation
   */
  constructor(shipModel) {
    this.shipModel = shipModel;
  }

  /**
   * Get all ships
   * @param {Object} request HttpRequest
   * @param {Number} request.query.title A part of the name of a ship to seach (optional)
   * @param {Object} response HttpResponse
   */
  async getAll(request, response) {
    let results = [];

    const { title } = request.query;
    const whereClause = {};

    if (title) {
      whereClause.title = {
        // Sequelize will do escaping for us
        [Op.like]: `${title}%`,
      };
    }

    try {
      results = await this.shipModel.findAll({
        attributes: ['id', 'title', 'likes'],
        where: whereClause,
      });

      response.json(results);
    } catch (error) {
      response.status(500).json([{
        error: error.toString(),
      }]);
    }
  }

  /**
   *
   * @param {Object} request
   * @param {Object} response
   */
  async postShip(request, response) {
    const shipData = request.body;
    const ship = this.shipModel.build(shipData);

    try {
      await ship.save();

      response.status(201).json(ship);
    } catch (error) {
      response.status(500).json([{
        error: error.toString(),
      }]);
    }
  }
}

module.exports = ShipController;
