const db = require('../../db');
// -------------import all code snippets here------------------
const syncServer = require('./server/snippet-startServer');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    // -------------import all code snippets here------------------
    syncServer();
  } catch (error) {
    console.log('error occured in syncAndSeed', error);
  }
};

module.exports = syncAndSeed;
