const db = require('../config/connection');

function getOne(id) {
  return db.one(`
    SELECT * FROM comments
    WHERE id = $1
    `, id)
}

function getAll() {
  return db.any(`
    SELECT * FROM comments
    `)
}

function create(comment) {
  return db.one(`
    INSERT INTO comments (text, posts_id)
    VALUES ($/text/, $/posts_id/)
    RETURNING *
    `, comment)
}

function destroy(id) {
  return db.none(`
    DELETE FROM comments
    WHERE id = $1
    `, id)
}

module.exports = {
  getOne,
  getAll,
  create,
  destroy
}
