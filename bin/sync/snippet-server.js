const Code = require('../../server/db/models/Code');

const syncServer = async () => {
  const s1 = await Code.create({
    id: 'S1',
    fileName: 'startServer.js',
    category: 'server',
    title: 'Server: startServer',
    snippet: `<% if(server.db) { -%>
const db = require('./db/db')
const syncAndSeed = require('./db/syncandseed')
<% } -%>

const app = require('./modifyserver')
const PORT = process.env.PORT || 3000

const initializeApp = async () => {
  try {
<% if(server.db) {-%>
    await db.sync()
    await syncAndSeed()
<% } -%>
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
    fileName: 'modifyServer.js',
    category: 'server',
    title: 'Server: modifyServer',
    snippet: `const express = require('express')
const app = express()
const path = require('path')

app.use(express.json());

<% if(server.db) { -%>
const individualRouter = require('./routes/individualrouter')
app.use('/YOUR-MOUNTED-PATH', individualRouter)
<% } -%>

<% if(server.db.extraRouter) { -%>
const secondRouter = require('./routes/secondrouter')
app.use('/YOUR-SECOND-MOUNTED-PATH', secondRouter)
<% } -%>

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
    snippet: `const Sequelize = require('sequelize')

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
    snippet: `const { DataTypes } = require('sequelize')
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
    snippet: `const { DataTypes } = require('sequelize')
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
    snippet: `const ModelName = require('./modelname')
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
    snippet: `const db = require('./db')
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
    snippet: `<% if(server.db) { -%>
// We're bringing in this model for you to use in your routes.
const { models: { ModelName } } = require('../db/models/modelsandrelationships')
const individualRouter = require('express').Router()

/**
* The routes in this file are mounted on whatever path you define in line 8 of server/modifyserver.js
*
* For instance:
*
* individualRouter.get('/helloworld', () => {...})
*
* would be accessible on the browser at http://localhost:3000/YOUR-MOUNTED-PATH/helloworld
*/

individualRouter.get('/', async(req, res, next) => {
  res.status(200).send(/* YOUR DATA HERE */)
});

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

  const s9 = await Code.create({
    id: 'S9',
    fileName: 'package.json',
    category: 'server',
    title: 'Server: package.json file',
    snippet: `{
  "name": "boilerplatebuilder",
  "version": "1.0.0",
  "description": "",
  "main": "modifyserver.js",
  "scripts": {
<% if (react && server) { -%>
    "build": "webpack  --mode=production",
    "build:dev": "npm run build -- --watch --mode=development",
    "start:dev": "npm run build:dev & nodemon server/startserver.js --ignore dist/", 
    "windows-start:dev": "nodemon server/startserver.js"
<% } else if(react){ -%>
    "build": "webpack  --mode=production",
    "build:dev": "npm run build -- --watch --mode=development",
<% } else if(server){ -%>
    "start:dev": "npm run build:dev & nodemon server/startserver.js --ignore dist/", 
    "windows-start:dev": "nodemon server/startserver.js"
<% } -%>
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
<% if(server) {-%>
    "express": "^4.17.1"<% if (server.db) { -%>,
    "sequelize": "^6.6.2",
    "pg": "^8.6.0"<% }} if (react) { -%><% if (server) { -%>,<% } -%>
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "axios": "^0.21.1"<% if (react.redux) { -%>,
    "react-redux": "^7.2.4",
    "redux": "^4.1.0",
    "redux-thunk": "^2.3.0"<% } if(react.reactRouter) { -%>,
    "react-router-dom": "^5.2.0"
<% }} -%>
  },
  "devDependencies": {
<% if(react && server) { -%>
    "nodemon": "^2.0.7",
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.0",
    "@babel/cli": "^7.13.16",
    "@babel/core": "^7.13.16",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^8.2.2"
<% } else if(react) { -%>
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.0",
    "@babel/cli": "^7.13.16",
    "@babel/core": "^7.13.16",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^8.2.2"
<% } else if(server) { -%>
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.0",
    "@babel/cli": "^7.13.16",
    "@babel/core": "^7.13.16",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^8.2.2"
<% } -%>
  }
}`,
})
  const s10 = await Code.create({
    id: 'S10',
    fileName: '.babelrc',
    category: 'server',
    title: 'Server: package.json file',
    snippet: `{
  "presets": [
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}`,
  });

  const s11 = await Code.create({
    id: 'S11',
    fileName: 'secondrouter.js',
    category: 'router',
    title: 'extra router',
    snippet: `const secondRouter = require('express').Router()

/**
* The routes in this file are mounted on whatever path you define in line 11 of server/modifyserver.js
*
* For instance:
*
* secondRouter.get('/helloworld', () => {...})
*
* would be accessible on the browser at http://localhost:3000/YOUR-MOUNTED-PATH/helloworld
*/

secondRouter.get('/', async(req, res, next) => {
  res.status(200).send(/* YOUR DATA HERE */)
});

secondRouter.post('/', async(req, res, next) => {
  res.status(201).send(/* YOUR CREATED RESOURCE HERE */)
});

secondRouter.put('/', async(req, res, next) => {
  res.status(200).send(/* YOUR UPDATED RESOURCE HERE */)
});

secondRouter.delete('/', async(req, res, next) => {
  res.sendStatus(200)
});

module.exports = secondRouter
`,
  })
};

module.exports = syncServer;
