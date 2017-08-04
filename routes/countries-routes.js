const express = require('express');
const countryRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const countriesController = require('../controllers/countries-controller');


countryRoutes.get('/', countriesController.index);
countryRoutes.post('getPlacesToGo/add',authHelpers.loginRequired,countriesController.create);

countryRoutes.get('/add',authHelpers.loginRequired, (req, res) => {
  res.render('getPlacesToGo/add', {
    currentPage: 'add',
  });
});

countryRoutes.get('/:id', authHelpers.loginRequired,countriesController.show);
countryRoutes.get('/:id/edit', authHelpers.loginRequired, countriesController.edit);
countryRoutes.put('/:id',  authHelpers.loginRequired, countriesController.update);
countryRoutes.delete('/:id', authHelpers.loginRequired,countriesController.delete);

module.exports = countryRoutes;

