require('isomorphic-fetch');
require('dotenv').config();


function getPlacesToGo(req, res, next) {
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=santiago+rep+dom+city+point+of+interest&language=en&key=${process.env.google_API}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
        res.locals.getPlacesToGo = jsonRes.results;
        let imagesArray=[];

        for(index=0; index < jsonRes.results.length;index++){
            imagesArray.push(jsonRes.results[index].photos[0].photo_reference)
        }

        getImages(imagesArray);
        res.locals.imagesUrl=getImages(imagesArray);
        console.log("xHey",getImages(imagesArray));


     })
    .then(function(){return next()})
    .catch(err => {
      console.log(err);
      return next();
    })
}

function getImages(placesArray){
    let  imagesArray = placesArray.map(function(photo_reference){
        return fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&key=${process.env.google_API}&photoreference=${photo_reference}`)
                .then(function(images) {
                    return images.url
                 });
    });

    Promise.all(imagesArray)
    .then(function(imagesUrl){
        console.log(imagesUrl);
        return imagesUrl;
    })
    .catch(err => {
      console.log(err);
    })
}

module.exports = {getPlacesToGo}

