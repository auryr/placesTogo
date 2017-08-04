const getPlacesToGoController = {};
const Legislator = require('../models/places');

getPlacesToGoController.index = (req, res) => {
  res.render('getPlacesToGo/getPlacesToGo-index', {
    placesToGo: res.locals.getPlacesToGo,
    imagesUrl : res.locals.imagesUrl,
  });
}
module.exports = getPlacesToGoController;


getPlacesToGoController.create = (req, res) => {
  Legislator.create({
      description: res.locals.getPlacesToGo.name,
      detail: res.locals.getPlacesToGo.formatted_address,
      imagesUrl : res.locals.imagesUrl,
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



// legController.create = (req, res) => {
//   console.log(res.locals.officials);
//   Legislator.create(res.locals.officials)
//     .then(data => {
//       console.log(data);
//       res.json({data: data});
//     }).catch(err => {
//       console.log(err);
//       res.json({message: err});
//     });
// };

// module.exports = legController;
