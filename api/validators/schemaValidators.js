/**
 * @see https://www.npmjs.com/package/jsonschema
 */
const { Validator } = require('jsonschema');
const shipSchema = require('./schemas/ship.json');

const validator = new Validator();

module.exports = {
  validateShipPayload(request, response, next) {
    const result = validator.validate(request.body, shipSchema);

    if (result.valid) {
      next();

      return;
    }

    response.status(400).json(result.errors.map((error) => ({
      error: error.toString(),
    })));
  },
  validateLikePayload(request, response, next) {
    const { value } = request.body;

    if ([1, -1].includes(value)) {
      next();

      return;
    }

    response.status(400).json([{
      error: 'Like value should be one if -1 and 1',
    }]);
  },
};
