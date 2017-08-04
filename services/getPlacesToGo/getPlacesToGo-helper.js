require('isomorphic-fetch');
require('dotenv').config();


function getPlacesToGo(req, res, next) {
    let country=(req.query.country).replace(" ","+");
    let city=(req.query.city).replace(" ","+");
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${country}+${city}+point+of+interest&language=en&key=AIzaSyBMaACuJ9Fd9moYBUTwinEA_IcCHHNlLNg`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
        res.locals.getPlacesToGo = jsonRes.results;
        let imagesArray=[];
        for(index=0; index < jsonRes.results.length ;index++){
            if(jsonRes.results[index].hasOwnProperty("photos")){
                imagesArray.push(jsonRes.results[index].photos[0].photo_reference);
            }
            else{
                console.log("photo doesnt exist");
                imagesArray.push("./images/noImage.jpg")
            }
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

