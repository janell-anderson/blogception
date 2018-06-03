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
    INSERT INTO comments (text, post_id)
    VALUES ($/text/, $/post_id/)
    RETURNING *
    `, comment)
}

function destroy(id) {
  return db.none(`
    DELETE FROM comments
    WHERE id = $1
    `, id)
}

function update(comment) {
  return db.one(`
    UPDATE comments
    SET text = $/text/, post_id = $/post_id/
    WHERE id = $/id/
    RETURNING *
    `, comment);
}

module.exports = {
  getOne,
  getAll,
  create,
  destroy,
  update
}
