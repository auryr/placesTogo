const db = require("../db/config");
const Place = {};

Place.findAll = function(user_id) {
    return db.query(`SELECT *,to_char(planneddate,'yyyy-MM-dd') as planneddatestr, to_char(visitdate,'yyyy-MM-dd') as visitdatestr FROM placesToGo WHERE user_id=1`,[user_id]);
}

Place.findById = function(id){
   return db.one(`SELECT *,to_char(planneddate,'yyyy-MM-dd') as planneddatestr, to_char(visitdate,'yyyy-MM-dd') as visitdatestr from placesToGo WHERE id = $1`, [id]);

}


Place.create = (placesArray) => {
     return db.none(`
    DO
    $do$
    BEGIN
      IF NOT EXISTS(SELECT * FROM placesToGo where placeId=$4) THEN
      INSERT INTO placesToGo(state,description, address, rating, placeId, imageUrl, iconUrl, planneddate, user_id) VALUES('N',$1, $2, $3, $4, $5, $6, $7, $8);
      END IF;
    END
    $do$ `, [ placesArray.description, placesArray.address, parseFloat(placesArray.rating), placesArray.placeId, placesArray.imageUrl,  placesArray.iconUrl , placesArray.planneddate, placesArray.user_id ]);


};

Place.createComments= function(comment){
    return db.none(`
      INSERT INTO comments(comment,commentDate, placesToGo_id) VALUES($1, to_date(now(), 'yyyy-MM-dd'), $2);
 `, [ comment.comment, comment.placeToGo_Id ]);

}

Place.update = function(place, id){
if (place.visiteddate==""){
    place.visiteddate=null
}

 return db.none(`UPDATE placesToGo  set planneddate= $1,visitdate=$2 ,detail=$3 where id=$4`, [place.planneddate ,place.visiteddate ,place.detail,id]);
}

Place.destroy = function(id){
  return db.none(` DELETE FROM placesToGo WHERE id = $1 `, [id]);
}


module.exports = Place;

