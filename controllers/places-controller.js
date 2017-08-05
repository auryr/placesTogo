const Places = require('../models/places');

const placesController = {};

placesController.index = function(req, res) {
  Places.findAll()
    .then(function(places){
      res.render('places/places-index', {
        currentPage: 'index',
        message: 'ok',
        places: places,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    })
};

placesController.show = function(req, res){
  Places.findById(req.params.id)
    .then(function(place){
      res.render('places/places-single', {
        currentPage: 'show',
        message: 'ok',
        data: place,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};


placesController.update = function(req, res){
  Places.update({
    description:res.locals.description,
    detail:res.locals.detail,
  }, req.params.id).then(function(place){
    res.redirect(`/places/${req.params.id}`);
  }).catch(function(err){
    console.log(err);
    res.status(500).json(err);
  });
};

placesController.edit = function(req, res) {
  Places.findById(req.params.id)
    .then(function(place){
      res.render('places/places-edit', {
        currentPage: 'edit',
        data: place,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};

placesController.delete = function(req, res) {
  Places.destroy(req.params.id)
    .then(function(){
      res.redirect('/places');
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = placesController;
