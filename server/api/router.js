const router = require('express').Router();

const allSnippets = require('./allSnippets');
const loginRouter = require('./login');

router.use('/all', allSnippets);
router.use('/login', loginRouter);

module.exports = router;
