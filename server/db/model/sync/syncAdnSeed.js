const db = require('../../db');
// -------------import all models here------------------
const { Server } = require('../../index');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    // -------------import all code snippets here------------------
  } catch (error) {
    console.log('error occured in syncAndSeed', error);
  }
};

module.exports = syncAndSeed;
