const router = require('express').Router();

const allSnippets = require('./allSnippets');
const loginRouter = require('./login');
const accessTokenRouter = require('./accessTokenRouter');
const zippedBoilerPlate = require('./zippedBoilerPlate');
const oauthRouter = require('./oauthRouter');
const localAuth = require('./localAuthRouter');
const forumRouter =require('./forumroutes')

router.use('/completedboiler', zippedBoilerPlate);
router.use('/all', allSnippets);
router.use('/login', loginRouter);
router.use('/github/callback', accessTokenRouter);
router.use('/auth', oauthRouter);
router.use('/localAuth', localAuth);
router.use('/forum', forumRouter);

module.exports = router;
