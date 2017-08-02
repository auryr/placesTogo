const db = require('../db/config');

const city = {};

city.findAll = function() {
  return db.query('SELECT * FROM cities');
}

city.findById = function(id){
  return db.one(`SELECT * FROM cities WHERE id = $1 `, [id]);
}

city.create = function(city) {
  return db.one(`INSERT INTO cities VALUES (default, $1,$2) RETURNING * `
    , [city.description,city.countryId]);
}

city.update = function(city, id){
  return db.one(` UPDATE cities SET description = $1 WHERE id = $2
    RETURNING *`, [city.description, id]);
}

city.destroy = function(id){
  return db.none(` DELETE FROM cities WHERE id = $1 `, [id]);
}

module.exports = city;
