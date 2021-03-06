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
        places: place,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json(err);
    });
};


placesController.update = function(req, res){
  if (req.body.visiteddate==""){
    req.body.visiteddate=null;
  }
  Places.update({
    planneddate:req.body.planneddate,
    visiteddate:req.body.visiteddate,
    detail:req.body.detail,
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
        places: place,
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

placesController.createComments = function(req, res) {
  console.log(req.body, res.params);
  Places.createComments ({
        comments: req.body.comments,
        placesToGo_id:req.params.id,
      })
      .catch(err => {
      console.log(err);
      res.json({message: err});
    });
};


module.exports = placesController;
