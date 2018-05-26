const blogDb = require('../models/blog');

function getAll(req, res, next) {
  blogDb.getAll()
    .then(data => {
      res.locals.posts = data;
      next();
    }).catch(next);
}

function getOne(req, res, next) {
  blogDb.getOne(req.params.id)
    .then(data => {
      res.locals.posts = data;
      next();
  }).catch(next);
}

function create(req, res, next) {
  blogDb.create(req.body)
    .then(data => {
      res.locals.posts = data
      console.log(res.locals.posts);
      next();
  }).catch(next);
}

function destroy(req, res, next) {
  blogDb.destroy(req.params.id)
    .then(data => {
      next();
    }).catch(next);
}

function update(req, res, next) {
  blogDb.update(req.body)
    .then(data => {
      res.locals.posts = data;
      next();
    }).catch(next);
}

module.exports= {
  getAll,
  getOne,
  create,
  destroy,
  update
}
