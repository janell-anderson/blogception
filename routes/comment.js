const commRouter = require('express').Router();
const commentController = require('../controllers/commentController');
const respController = require('../controllers/responseController');

commRouter.route('/')
  .get(
      commentController.getAll,
      respController.sendOkRespComments,
      respController.sendErrResp);

// the route for the comment form
commRouter.route('/new')
  .post(
    commentController.create,
    respController.sendOkRespComments,
    respController.sendErrResp);

commRouter.route('/:id')
  .get(
    commentController.getOne,
    respController.sendOkRespComments,
    respController.sendErrResp)

  .delete(
    commentController.destroy,
    respController.sendOkRespComments,
    respController.sendErrResp)

  .put(
    commentController.update,
    respController.sendOkRespComments,
    respController.sendErrResp);

module.exports = commRouter;
