const router = require('express').Router();
const allSnippets = require('./allSnippets');


const serverSnippets = require('./serverSnippets');
const zippedBoilerPlate = require('./zippedBoilerPlate')

router.use('/server', serverSnippets);
router.use('/completedboiler', zippedBoilerPlate)
router.use('/all', allSnippets);

module.exports = router;
