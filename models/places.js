const db = require("../db/config");
const Place = {};

Place.findAll = function(user_id) {
    return db.query(`SELECT * FROM placesToGo WHERE user_id=1`,[user_id]);
}

Place.findById = function(id){
    return db.one(`SELECT * from placesToGo WHERE id = $1`, [id]);
}


Place.create = (placesArray) => {
    console.log(placesArray);
    return db.none(`
    DO
    $do$
    BEGIN
      IF NOT EXISTS(SELECT * FROM placesToGo where placeId=$4) THEN
      INSERT INTO placesToGo(description, address, rating, placeId, imageUrl, iconUrl, planneddate, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8);
      END IF;
    END
    $do$ `, [ placesArray.description, placesArray.address, parseFloat(placesArray.rating), placesArray.placeId, placesArray.imageUrl,  placesArray.iconUrl , placesArray.planneddate, placesArray.user_id ]);


};


Place.update = function(place, id){
 return db.one(``, [place.description ,place.detail ,place.user_id,id]);
}

Place.destroy = function(id){
  return db.none(` DELETE FROM placesToGo WHERE id = $1 `, [id]);
}


module.exports = Place;

