const Server = require('../code_snippets/model-server');

const syncModifyServer = async () => {
  const s1 = await Server.create({
    id: 'S1',
    title: 'App: create',
    snippet: `
      const express = require('express')
      const app = express()
      const path = require('path')

      app.use(express.json());
    `,
  });

  const s2 = await Server.create({
    id: 'S2',
    title: 'App: use, get & exports',
    snippet: `
      app.use('/public', express.static(path.join(__dirname, '..', 'public')));

      app.get('/', (req, res, next) => {
        res.sendFile(path.join(__dirname, '..', 'client/htmlindex.html'))
      });

      app.use(function (req, res, next) {
        res.status(404).send("Are you lost? That page doesn't seem to exist.");
      });

      app.use(function (err, req, res, next) {
         res.status(500).send({ error: err });
      });

      module.exports = app
    `,
  });

  const s3 = await Server.create({
    id: 'S3',
    title: 'App: router require',
    snippet: `
      const individualRouter = require('./routes/individualrouter')
      app.use('/YOUR-MOUNTED-PATH', individualRouter)
    `,
  });
}

module.exports = syncModifyServer;
