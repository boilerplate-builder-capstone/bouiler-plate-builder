const router = require('express').Router();

const allSnippets = require('./allSnippets');
const loginRouter = require('./login');
const accessTokenRouter = require('./accessTokenRouter');
const zippedBoilerPlate = require('./zippedBoilerPlate');
const authRouter = require('./authRouter');

router.use('/completedboiler', zippedBoilerPlate);
router.use('/all', allSnippets);
router.use('/login', loginRouter);
router.use('/github/callback', accessTokenRouter);
router.use('/auth', authRouter);

module.exports = router;
