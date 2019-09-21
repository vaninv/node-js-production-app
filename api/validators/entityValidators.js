
module.exports = {
  validateExistence(entityType, model) {
    const entityValidator = async (request, response, next) => {
      let entity = null;
      const keyParameterValue = request.params[entityType];

      try {
        entity = await model.findByPk(keyParameterValue);
      } catch (error) {
        response.status(500).json([{
          error: error.toString(),
        }]);

        return;
      }

      if (entity) {
        next();

        return;
      }

      response.sendStatus(404);
    };

    return entityValidator;
  },
};
