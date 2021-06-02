const router = require('express').Router();

const serverSnippets = require('./serverSnippets');

router.use('/server', serverSnippets);

module.exports = router;
