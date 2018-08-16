// Response for Posts
function sendOkResp(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.posts || res.locals.posts
  })
}

// Response for Comments
// Didn't have a response for comments so it only showed a blank array in Postman.
// Was only looking for res.locals.posts
function sendOkRespComments(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.comments || res.locals.comments
  })
}

function sendErrResp(err, req, res, next) {
  console.log(err);
  res.json({
    status: 'err',
    msg: err.message
  })
}

module.exports = {
  sendOkResp,
  sendOkRespComments,
  sendErrResp
}
