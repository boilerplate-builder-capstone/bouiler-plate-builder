const router = require('express').Router();
const allSnippets = require('./allSnippets');

const zippedBoilerPlate = require('./zippedBoilerPlate');

router.use('/completedboiler', zippedBoilerPlate);
router.use('/all', allSnippets);

module.exports = router;
