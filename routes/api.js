const apiRouter = require('express').Router();

// Calling both auth and blogs routers and using them as a path
const blogsRouter = require('./blogs');
const authRouter = require('./auth');
const commRouter = require('./comment');


// whatever is in the path it will render from the apiRouter
apiRouter.use('/blogs', blogsRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/comment', commRouter);


module.exports = apiRouter;
