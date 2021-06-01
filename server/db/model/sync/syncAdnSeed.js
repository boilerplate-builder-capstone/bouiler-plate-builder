const db = require('../../db');
// -------------import all models here------------------
const syncServer = require('../code_snippets/model: server');
const { Server } = require('../../index');

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
