const place = require('../models/places');

const placesController = {};

placesController.index = function(req, res) {
  place.findAll()
    .then(function(places){
      res.render('places/place-index', {
        currentPage: 'index',
        message: 'ok',
        data: places,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    })
};

placesController.show = function(req, res){
  place.findById(req.params.id)
    .then(function(place){
      res.render('places/place-single', {
        currentPage: 'show',
        message: 'ok',
        data: place,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};

placesController.create = (req, res) => {
  console.log(res.locals.description);
  place.create({
    description:res.locals.description,
    detail:res.locals.detail,
  })
    .then(data => {
      console.log(data);
      res.json({data: data});
    }).catch(err => {
      console.log(err);
      res.json({message: err});
    });
};


module.exports = legController;

placesController.update = function(req, res){
  place.update({
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
  place.findById(req.params.id)
    .then(function(place){
      res.render('places/place-edit', {
        currentPage: 'edit',
        data: place,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};

placesController.delete = function(req, res) {
  place.destroy(req.params.id)
    .then(function(){
      res.redirect('/places');
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = placesController;
