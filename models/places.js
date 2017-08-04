const db = require("../db/config");
const Place = {};

Place.findAll = function(user_id) {
  return db.query(`SELECT * FROM places`,[user_id]);
}

Place.findById = function(id){
 return db.one(`SELECT * from places WHERE id = $1`, [id]);
}

PLegislator.create = (places) => {
  console.log(places);
  return db.tx(t => {
    const queries = legislators.map(function(placeArray){
      return t.one(`
        INSERT INTO places(description,detail,comment)
        VALUES($1, $2)
        RETURNING *
      `, [placeArray.description, placeArray.detail,placeArray.imageUrl,]);
    });
    // this runs all the queries
    return t.batch(queries);
  });
};



Place.update = function(place, id){
 return db.one(``, [place.description ,place.detail ,place.user_id,id]);
}

Place.destroy = function(id){
  return db.none(` DELETE FROM places WHERE id = $1 `, [id]);
}


module.exports = Place;
