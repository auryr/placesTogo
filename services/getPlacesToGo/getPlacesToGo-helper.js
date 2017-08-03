require('isomorphic-fetch');
require('dotenv').config();


function getPlacesToGo(req, res, next) {
    let country=req.query.country;
    let city=req.query.city;
    console.log(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}+${country}+point+of+interest&language=en&key=${process.env.google_API}`);

    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}+${country}+point+of+interest&language=en&key=${process.env.google_API}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
        res.locals.getPlacesToGo = jsonRes.results;
        let imagesArray=[];

        for(index=0; index < 2;index++){
            imagesArray.push(jsonRes.results[index].photos[0].photo_reference)
        }

       let  promiseArray = imagesArray.map(function(photo_reference){
        return fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&key=${process.env.google_API}&photoreference=${photo_reference}`)
                .then(function(images) {
                    return images.url
                 });
        });

        Promise.all(promiseArray).then(function(responce){
            res.locals.imagesUrl =responce;
            return next();
        });

     })
    .catch(err => {
      console.log(err);
      return next();
    })
}

module.exports = {
  getPlacesToGo,
}

