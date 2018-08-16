const commDb = require('../models/comment');

function getAll(req, res, next) {
  console.log("Found all the comments");
  commDb.getAll()
    .then(data => {
      res.locals.comments = data;
      console.log(data);
      next();
    }).catch(next);
}

function getOne(req, res, next) {
  commDb.getOne(req.params.id)
    .then(data => {
      res.locals.comments = data;
      next();
  }).catch(next);
}

function create(req, res, next) {
  console.log("Hi I created a comment!");
  commDb.create(req.body)
    .then(data => {
      res.locals.comments = data
      console.log(res.locals.comments);
      next();
  }).catch(next);
}

function destroy(req, res, next) {
  commDb.destroy(req.params.id)
    .then(data => {
      next();
    }).catch(next);
}

function update(req, res, next) {
  commDb.update(req.body)
    .then(data => {
      res.locals.comments = data;
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
