const getPlacesToGoController = {};
const Legislator = require('../models/places');

getPlacesToGoController.index = (req, res) => {
  res.render('./index', {
    placesToGo: res.locals.getPlacesToGo,
    imagesUrl : res.locals.imagesUrl,
  });
}
module.exports = getPlacesToGoController;


getPlacesToGoController.create = (req, res) => {
  console.log("Im here",req.body);
  Legislator.create({
      description: req.body.description,
      adress: req.body.adress,
      imagesUrl: req.body.imagesUrl,
      placeId: req.body.placeId,
    })
    .then(data => {
      console.log(data);
      res.json({data: data});
    }).catch(err => {
      console.log(err);
      res.json({message: err});
    });
};

module.exports = getPlacesToGoController;

