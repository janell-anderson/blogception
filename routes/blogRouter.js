const blogRouter = require('express').Router();
const blogController = require('../controllers/blogController');
const respController = require('../controllers/responseController');

blogRouter.route('/')
  .get(
      blogController.getAll,
      respController.sendOkResp,
      respController.sendErrResp);

blogRouter.route('/new')
  .post(
    blogController.create,
    respController.sendOkResp,
    respController.sendErrResp);

blogRouter.route('/:id')
  .get(
    blogController.getOne,
    respController.sendOkResp,
    respController.sendErrResp)

  .delete(
    blogController.destroy,
    respController.sendOkResp,
    respController.sendErrResp)

  .put(
    blogController.update,
    respController.sendOkResp,
    respController.sendErrResp);

  module.exports = blogRouter;

