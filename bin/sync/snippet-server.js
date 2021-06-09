const Code = require('../../server/db/models/Code');

const syncServer = async () => {
  const s1 = await Code.create({
    id: 'S1',
    fileName: 'startServer.js',
    category: 'server',
    title: 'Server: startServer',
    snippet: `
      <% if(database) { %>
      const db = require('./db/db')
      const syncAndSeed = require('./db/syncandseed')
      <% } %>

      const app = require('./modifyserver')
      const PORT = process.env.PORT || 3000

      const initializeApp = async () => {
        try {
            <% if(database) {%>
            await db.sync()
            await syncAndSeed()
            <% } %>
            app.listen(PORT, () => console.log(\`app is listening on \${PORT}\`))
        }
        catch (error) {
                console.log(error)
        }
      }

      initializeApp()
    `,
  });

  const s2 = await Code.create({
    id: 'S2',
    fileName: 'modifyServer.js(app.js)',
    category: 'server',
    title: 'Server: modifyServer',
    snippet: `
      const express = require('express')
      const app = express()
      const path = require('path')

      app.use(express.json());
      <% if(router) {%>
      const individualRouter = require('./routes/individualrouter')
      app.use('/YOUR-MOUNTED-PATH', individualRouter)
      <% } %>
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

  const s3 = await Code.create({
    id: 'S3',
    fileName: 'db.js',
    category: 'database',
    title: 'Server: db',
    snippet: `
      const Sequelize = require('sequelize')

      const dbName = /* NAME OF YOUR DATABASE HERE */
      const db = new Sequelize(process.env.DATABASE_URL || \`postgres://localhost/\${dbName}\`)

      module.exports = db
    `,
  });

  const s4 = await Code.create({
    id: 'S4',
    fileName: 'modelname.js',
    category: 'model',
    title: 'Server: models',
    snippet: `
      const { DataTypes } = require('sequelize')
      const db = require('../db')

      const ModelName = db.define('modelName', {
        exampleProperty: {
            type: DataTypes.STRING
        }
      })

      module.exports = ModelName
    `,
  });

  const s5 = await Code.create({
    id: 'S5',
    fileName: 'othermodelname.js',
    category: 'model',
    title: 'Server: other models',
    snippet: `
      const { DataTypes } = require('sequelize')
      const db = require('../db')

      const OtherModelName = db.define('otherModelName', {
        exampleProperty: {
            type: DataTypes.STRING
        }
      })

      module.exports = OtherModelName
    `,
  });

  const s6 = await Code.create({
    id: 'S6',
    fileName: 'modelsandrelationships.js',
    category: 'model',
    title: "Server: models' relationships",
    snippet: `
      const ModelName = require('./modelname')
      const OtherModelName = require('./othermodelname')

      // define your model associations below. See documentation: https://sequelize.org/master/manual/assocs.html

      module.exports = {
        models: {
            ModelName,
            OtherModelName
        }
      }
    `,
  });

  const s7 = await Code.create({
    id: 'S7',
    fileName: 'syncandseed.js',
    category: 'syncandseed',
    title: 'Syncandseed',
    snippet: `
      const db = require('./db')
      const { models: { ModelName, OtherModelName } } = require('./models/modelsandrelationships')

      const syncAndSeed = async() => {
        try {
            await db.sync({ force: true })
            //create your data instances here. See documentation: https://sequelize.org/master/manual/model-instances.html
            // await ModelName.create({
            //     exampleProperty: 'Test property!'
            // })
            // await OtherModelName.create({
            //     exampleProperty: 'Test property!'
            // })

        } catch (error) {
            console.log(error)
        }
      }

      module.exports = syncAndSeed
    `,
  });

  const s8 = await Code.create({
    id: 'S8',
    fileName: 'individualrouter.js',
    category: 'router',
    title: 'router',
    snippet: `
    <% if(router) {%>
      // We're bringing in this model for you to use in your routes.
      const { models: { ModelName } } = require('../db/models/modelsandrelationships')
      const individualRouter = require('express').Router()

      /**
      * The routes in this file are mounted on whatever path you define in line 8 of server/modifyserver.js
      *
      * For instance:
      *
      * router.get('/helloworld', () => {...})
      *
      * would be accessible on the browser at http://localhost:3000/YOUR-MOUNTED-PATH/helloworld
      */

      individualRouter.get('/', async(req, res, next) => {
        res.status(200).send(/* YOUR DATA HERE */)
        }
      );

      individualRouter.post('/', async(req, res, next) => {
        res.status(201).send(/* YOUR CREATED RESOURCE HERE */)
      });

      individualRouter.put('/', async(req, res, next) => {
        res.status(200).send(/* YOUR UPDATED RESOURCE HERE */)
      });

      individualRouter.delete('/', async(req, res, next) => {
        res.sendStatus(200)
      });

      module.exports = individualRouter
      <% } %>
    `,
  });
};

module.exports = syncServer;
