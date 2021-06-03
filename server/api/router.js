const router = require('express').Router();

const serverSnippets = require('./serverSnippets');
const zippedBoilerPlate = require('./zippedBoilerPlate')

router.use('/server', serverSnippets);
router.use('/completedboiler', zippedBoilerPlate)

module.exports = router;
