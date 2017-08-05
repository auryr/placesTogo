const express = require('express');
const placesRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const placesController = require('../controllers/places-controller');


placesRoutes.get('/',  placesController.index);

placesRoutes.get('/:id', placesController.show);
placesRoutes.get('/:id/edit',  placesController.edit);
placesRoutes.put('/:id',  placesController.update);
placesRoutes.delete('/:id', placesController.delete);

module.exports = placesRoutes;

