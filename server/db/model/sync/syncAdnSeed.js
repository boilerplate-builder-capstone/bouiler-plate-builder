const db = require('../../db');
// -------------import all models here------------------
const { Server } = require('../../index');
// -------------import all code snippets here------------------
const serverSeed = require('./server/server');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    await serverSeed();
  } catch (error) {
    console.log('error occured in syncAndSeed', error);
  }
};

module.exports = syncAndSeed;
