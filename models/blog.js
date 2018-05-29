const db = require('../config/connection');

function getAll() {
  return db.any(`
    SELECT * FROM posts
    `);
}

function getOne(id) {
  return db.one(`
    SELECT * FROM posts
    WHERE id = $1
    `, id);
}

function create(posts) {
  return db.one(`
    INSERT INTO posts (title, text, img_url)
    VALUES ($/title/, $/text/, $/img_url/)
    RETURNING *
    `, posts);
}

function destroy(id) {
  return db.none(`
    DELETE FROM posts
    WHERE id = $1
    `, id);
}

function update(posts) {
  return db.one(`
    UPDATE posts
    SET title = $/title/, text = $/text/, img_url = $/img_url/
    WHERE id = $/id/
    RETURNING *
    `, posts);
}

module.exports = {
  getAll,
  getOne,
  create,
  destroy,
  update
}
