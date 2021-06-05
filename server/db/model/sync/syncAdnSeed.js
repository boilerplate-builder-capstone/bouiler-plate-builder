const db = require('../../db');
// -------------import all code snippets here------------------
const syncServer = require('./server/snippet-startServer');
const syncModifyServer = require('./server/snippet-modifyServer');
const syncdb = require('./server/snippet-db');
const syncModelName = require('./server/snippet-modelname');
const syncOtherModelName = require('./server/snippet-othermodelname');
const syncModelsAndRelationships = require('./server/snippet-modelsandrelationships');
const syncSyncAndSeed = require('./server/snippet-syncandseed');
const syncIndividualRouter = require('./server/snippet-individualrouter');




const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    // -------------import all code snippets here------------------
    syncServer();
    syncModifyServer();
    syncdb();
    syncModelName();
    syncOtherModelName();
    syncModelsAndRelationships();
    syncSyncAndSeed();
    syncIndividualRouter();
  } catch (error) {
    console.log('error occured in syncAndSeed', error);
  }
};

module.exports = syncAndSeed;
