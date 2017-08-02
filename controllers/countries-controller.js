const country = require('../models/countries');

const countryController = {};

countryController.index = function(req, res) {
  country.findAll()
    .then(function(countries){
      res.render('countries/country-index', {
        currentPage: 'index',
        message: 'ok',
        data: countries,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    })
};

countryController.show = function(req, res){
  country.findById(req.params.id)
    .then(function(country){
      res.render('countries/country-single', {
        currentPage: 'show',
        message: 'ok',
        data: country,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};

countryController.create = function(req, res){
  country.create({
    description: req.body.description,
  }).then(function() {
    res.redirect('/countries');
  }).catch(function(err){
    console.log(err);
    res.status(500).json(err);
  });
};

countryController.update = function(req, res){
  country.update({
    description: req.body.description,
  }, req.params.id).then(function(country){
    res.redirect(`/countries/${req.params.id}`);
  }).catch(function(err){
    console.log(err);
    res.status(500).json(err);
  });
};

countryController.edit = function(req, res) {
  country.findById(req.params.id)
    .then(function(country){
      res.render('countries/country-edit', {
        currentPage: 'edit',
        data: country,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};

countryController.delete = function(req, res) {
  country.destroy(req.params.id)
    .then(function(){
      res.redirect('/countries');
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = countryController;
