const profileRouter = require('express').Router();
const profileController = require('../controllers/profileController');
const respController = require('../controllers/responseController');

profileRouter.route('/api/')
  .get(
    profileController.getAll,
    respController.sendOkResp,
    respController.sendOkResp
    );

