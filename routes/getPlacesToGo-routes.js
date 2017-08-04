const express = require('express');
const getPlacesToGoRouter = express.Router();

const getPlacesToGoHelper = require('../services/getPlacesToGo/getPlacesToGo-helper');
const getPlacesToGoController = require('../controllers/getPlacesToGo-controller');

const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');

getPlacesToGoRouter.get('/', getPlacesToGoController.index);
getPlacesToGoRouter.post('/add', getPlacesToGoHelper.getPlacesToGo, getPlacesToGoController.create);


module.exports = getPlacesToGoRouter;




legislatorRouter.get('/', legController.index);
// posting to `/geo` ... do a couple of things with the info
//                              | this one makes the API request
//                              V                                v and this one changes the data some
legislatorRouter.post('/geo', legHelpers.getOfficialsFromZip, legHelpers.adjustLegislatorData, legController.create);

module.exports = legislatorRouter;
