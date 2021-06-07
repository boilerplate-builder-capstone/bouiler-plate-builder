const router = require('express').Router();

const allSnippets = require('./allSnippets');

router.use('/all', allSnippets);

module.exports = router;
