const db = require('../../server/db/db');
const Code = require('../../server/db/models/Code');
const syncPublic = require('./snippet-public-index');
const syncReact = require('./snippet-react');
const syncServer = require('./snippet-server');
// -------------import all code snippets here------------------

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    // -------------import all code snippets here------------------
    await syncReact();
    await syncServer();
    await syncPublic();
    // delete below when we have an actual code snippet
    await Code.create({
      id: 'T1',
      fileName: 'test.txt',
      category: 'test',
      title: 'test entry',
      snippet: 'this is a test for testing purposes',
    });
  } catch (error) {
    console.log('error occured in syncAndSeed', error);
  }
};

module.exports = syncAndSeed;
