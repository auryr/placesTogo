require('isomorphic-fetch');
require('dotenv').config();


function getPlacesToGo(req, res, next) {
    let country=(req.query.country).replace(" ","+");
    let city=(req.query.city).replace(" ","+");
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${country}+${city}+point+of+interest&language=en&type=tourist&&rankby=prominence&key=AIzaSyBMaACuJ9Fd9moYBUTwinEA_IcCHHNlLNg`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
        res.locals.getPlacesToGo = jsonRes.results;
        let imagesArray=[];
        for(index=0; index < jsonRes.results.length ;index++){
            if(jsonRes.results[index].hasOwnProperty("photos")){
                imagesArray.push(jsonRes.results[index].photos[0].photo_reference);
            }
            else{
                imagesArray.push("./images/noImage.jpg")
            }
        }

        let  promiseArray = imagesArray.map(function(photo_reference,index){
            if (photo_reference!=="./images/noImage.jpg"){
                return fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&key=${process.env.google_API}&photoreference=${photo_reference}`)
                        .then(function(images) {
                            return images.url
                         });
            }else{

              return photo_reference
            }

        });

        Promise.all(promiseArray).then(function(response){
            res.locals.imagesUrl =response;
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

