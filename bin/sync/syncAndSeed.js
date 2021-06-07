const db = require('../../server/db/db');
const Code = require('../../server/db/models/Code');
const syncReact = require('./snippet-react');
// -------------import all code snippets here------------------

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    // -------------import all code snippets here------------------
    await syncReact();
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
