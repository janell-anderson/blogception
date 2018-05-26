const blog = require('express').Router();
const blogController = require('../controllers/blogController');
const respController = require('../controllers/responseController');

// initial route to get all
blog.route('/')
  .get(
      blogController.getAll,
      respController.sendOkResp,
      respController.sendErrResp);

// the route for the blog form
blog.route('/new')
  .post(
    blogController.create,
    respController.sendOkResp,
    respController.sendErrResp);

blog.route('/:id')
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

  module.exports = blog;

