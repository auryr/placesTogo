const getPlacesToGoController = {};

getPlacesToGoController.index = (req, res) => {
  res.render('getPlacesToGo/getPlacesToGo-index', {
    placesToGo: res.locals.getPlacesToGo,
    imagesUrl: res.locals.imagesUrl,
  });
}
module.exports = getPlacesToGoController;

