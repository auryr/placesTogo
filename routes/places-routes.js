const express = require('express');
const placesRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const placeController = require('../controllers/place-controller');


placesRoutes.get('/',  placeController.index);
placesRoutes.post('/', placeController.create);

placesRoutes.get('/add', (req, res) => {
  res.render('place/places-add', {
    currentPage: 'add',
  });
});

placesRoutes.get('/:id', placeController.show);
placesRoutes.get('/:id/edit',  placeController.edit);
placesRoutes.put('/:id',  placeController.update);
placesRoutes.delete('/:id', placeController.delete);

module.exports = placesRoutes;

