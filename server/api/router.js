const router = require('express').Router();

const allSnippets = require('./allSnippets');
const loginRouter = require('./login');
const accessTokenRouter = require('./accessTokenRouter');

router.use('/all', allSnippets);
router.use('/login', loginRouter);
router.use('/github/callback', accessTokenRouter);

module.exports = router;
