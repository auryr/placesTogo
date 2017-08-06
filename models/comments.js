const db = require('../db/config');

const comment = {};

comment.findAll = function() {
  return db.query('SELECT * FROM comments');
}

comment.findById = function(id){
  return db.one(`SELECT * FROM comments WHERE id = $1 `, [id]);
}

comment.create = function(comment) {
  return db.one(`INSERT INTO comments VALUES (default, $1,$2) RETURNING * `
    , [comment.description,comment.countryId]);
}

comment.update = function(comment, id){
  return db.one(` UPDATE comments SET comment = $1 WHERE id = $2
    RETURNING *`, [comment.description, id]);
}

comment.destroy = function(id){
  return db.none(` DELETE FROM comments WHERE id = $1 `, [id]);
}

module.exports = comment;
