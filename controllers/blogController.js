const Blog = require('../models/blog');

function getAll(req, res, next) {
  Blog.getAll()
    .then(data => {
      res.locals.posts = data;
      next();
    }).catch(next);
}

function getOne(req, res, next) {
  Blog.getOne(req.params.id)
    .then(data => {
      res.locals.posts = data;
      next();
  }).catch(next);
}

function create(req, res, next) {
  Blog.create(req.body)
    .then(data => {
      res.locals.posts = data
      console.log(res.locals.posts);
      next();
  }).catch(next);
}

function destroy(req, res, next) {
  Blog.destroy(req.params.id)
    .then(data => {
      next();
    }).catch(next);
}

function update(req, res, next) {
  Blog.update(req.body)
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
