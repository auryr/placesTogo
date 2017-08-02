const getPlacesToGoController = {};

getPlacesToGoController.index = (req, res) => {
  console.log( "hey+============",res.locals.imagesUrl, res.locals.getPlacesToGo );
  res.render('getPlacesToGo/getPlacesToGo-index', {
    placesToGo: res.locals.getPlacesToGo,
    imagesUrl: res.locals.imagesUrl,
  });
}
module.exports = getPlacesToGoController;

