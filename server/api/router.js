const router = require('express').Router();

const allSnippets = require('./allSnippets');
const loginRouter = require('./login');
const accessTokenRouter = require('./accessTokenRouter');
const zippedBoilerPlate = require('./zippedBoilerPlate');
const oauthRouter = require('./oauthRouter');
const localAuth = require('./localAuthRouter');
const repoCreate = require('./repoCreate');

router.use('/completedboiler', zippedBoilerPlate);
router.use('/all', allSnippets);
router.use('/login', loginRouter);
router.use('/github/callback', accessTokenRouter);
router.use('/auth', oauthRouter);
router.use('/localAuth', localAuth);
router.use('/gitCreate', repoCreate);

module.exports = router;
