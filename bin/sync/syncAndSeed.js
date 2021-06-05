const db = require('../../server/db/db');
// -------------import all code snippets here------------------

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    // -------------import all code snippets here------------------
  } catch (error) {
    console.log('error occured in syncAndSeed', error);
  }
};

module.exports = syncAndSeed;
