const commRouter = require('express').Router();
const commentController = require('../controllers/commentController');
const respController = require('../controllers/responseController');

commRouter.route('/')
  .get(
      commentController.getAll,
      respController.sendOkResp,
      respController.sendErrResp);

// the route for the comment form
commRouter.route('/new')
  .post(
    commentController.create,
    respController.sendOkResp,
    respController.sendErrResp);

commRouter.route('/:id')
  .get(
    commentController.getOne,
    respController.sendOkResp,
    respController.sendErrResp)

  .delete(
    commentController.destroy,
    respController.sendOkResp,
    respController.sendErrResp);
module.exports = commRouter;
