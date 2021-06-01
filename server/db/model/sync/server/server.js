const Server = require('../../code_snippets/model-server');

console.log('hello from server sync', typeof Server);
const serverSeed = async () => {
  const S1 = await Server.create({
    id: 'S1',
    title: 'Server: imports',
    snippet: `
    Const express = require(‘express’);
    Const app = express();
    Const PORT = process.env.PORT || 3000;
    `,
  });

  const S2 = await Server.create({
    id: 'S2',
    title: 'Server: initializeApp',
    snippet: `
    Const initializeApp = async () => {
      Try {
        app.listen(PORT, () => console.log(‘app is listening on $ {PORT});
        }
        Catch (error) {
          console.log(error);
        }
      }
      
    initializeApp();
      `,
  });
};

module.exports = serverSeed;
