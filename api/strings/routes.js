/**
 * @module api/string/routes.js
 * @desc
 * Routes for api context
 * @author vaninv
 */
module.exports = {
  /**
   * Ship api endpoint
   * @method GET,POST
   */
  ship: '/v1/ship',
  /**
   * Likes api enpoint
   * @method POST
   */
  like: '/v1/ship/:ship/like',
};
