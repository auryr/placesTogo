const express = require('express');
const getPlacesToGoRouter = express.Router();

const getPlacesToGoHelper = require('../services/getPlacesToGo/getPlacesToGo-helper');
const getPlacesToGoController = require('../controllers/getPlacesToGo-controller');

const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');


getPlacesToGoRouter.get('/',  getPlacesToGoHelper.getPlacesToGo, getPlacesToGoController.index);
getPlacesToGoRouter.post('/add',getPlacesToGoController.create);

getPlacesToGoRouter.get('/add', (req, res) => {
  res.render('./index', {
    currentPage: 'add',
  });
});


module.exports = getPlacesToGoRouter;

