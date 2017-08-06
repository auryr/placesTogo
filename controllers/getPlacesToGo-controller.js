const getPlacesToGoController = {};
const places = require('../models/places');

getPlacesToGoController.index = (req, res) => {
  res.render('./index', {
    placesToGo: res.locals.getPlacesToGo,
    imagesUrl : res.locals.imagesUrl,
  });
}
module.exports = getPlacesToGoController;


getPlacesToGoController.create = (req, res) => {
  places.create({
      description: req.body.description,
      address: req.body.address,
      rating: ("0"+req.body.rating),
      placeId: req.body.placeId,
      imageUrl: req.body.imageUrl,
      iconUrl: req.body.iconUrl,
      planneddate: req.body.planneddate,
      user_id: process.env.CURRENT_USER,
      })
      .then(function(){})
      .catch(err => {
      console.log(err);
      res.json({message: err});
    });
};

module.exports = getPlacesToGoController;

