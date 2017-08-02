const db = require('../db/config');

const country = {};

country.findAll = function() {
  return db.query('SELECT * FROM countries');
}

country.findById = function(id){
  return db.one(`SELECT * FROM countries WHERE id = $1 `, [id]);
}

country.create = function(country) {
  return db.one(`INSERT INTO countries VALUES (default, $1) RETURNING * `
    , [country.description]);
}

country.update = function(country, id){
  return db.one(` UPDATE countries SET description = $1 WHERE id = $2
    RETURNING *`, [country.description, id]);
}

country.destroy = function(id){
  return db.none(` DELETE FROM countries WHERE id = $1 `, [id]);
}

module.exports = country;
