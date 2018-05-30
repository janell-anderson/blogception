const commRouter = require('express').Router();
const commentController = require('../controllers/commentController');
const respController = require('../controllers/responseController');

commRouter.route('/')
  .get(
    commentController.getAll,
    respController.sendOkResp,
    respController.SendErrResp
    )

commRouter.route('/new')
  .post(
    commentController.create,
    respController.sendOkResp,
    respController.SendErrResp
    );

commRouter.route(':id')
  .get(
    commentController.getOne,
    respController.sendOkResp,
    respController.SendErrResp
    )

  .delete(
    commentController.destroy,
    respController.sendOkResp,
    respController.SendErrResp
    );

module.exports = commRouter;
