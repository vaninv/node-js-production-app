/**
 * @module api/controllers/LikeController.js
 */
class LikeController {
  constructor(likeService) {
    this.likeService = likeService;
  }

  async postLike(request, response) {
    let like = null;

    const { value } = request.body;
    const { ship } = request.params;

    try {
      like = await this.likeService.like(ship, value);
      response.status(201).json(like);
    } catch (error) {
      response.status(500).json([{
        error: error.toString(),
      }]);
    }
  }
}

module.exports = LikeController;
