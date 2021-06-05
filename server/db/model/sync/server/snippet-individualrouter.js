const Server = require('../code_snippets/model-server');

const syncIndividualRouter = async () => {
  const s1 = await Server.create({
    id: 'S1',
    title: 'Require models',
    snippet: `
      // We're bringing in this model for you to use in your routes.
      const { models: { ModelName } } = require('../db/models/modelsandrelationships')
    `,
  });

  const s2 = await Server.create({
    id: 'S2',
    title: 'Require express router',
    snippet: `
      const individualRouter = require('express').Router()
    `,
  });

  const s3 = await Server.create({
    id: 'S3',
    title: 'Router introduction',
    snippet: `
      /**
       * The routes in this file are mounted on whatever path you define in line 8 of server/modifyserver.js
       *
       * For instance:
       *
       * router.get('/helloworld', () => {...})
       *
       * would be accessible on the browser at http://localhost:3000/YOUR-MOUNTED-PATH/helloworld
       */
    `,
  });

  const s4 = await Server.create({
    id: 'S4',
    title: 'Router GET',
    snippet: `
      individualRouter.get('/', async(req, res, next) => {
        res.status(200).send(/* YOUR DATA HERE */)
        }
      );
    `,
  });

  const s5 = await Server.create({
    id: 'S5',
    title: 'Router POST',
    snippet: `
      individualRouter.post('/', async(req, res, next) => {
        res.status(201).send(/* YOUR CREATED RESOURCE HERE */)
      });
    `,
  });

  const s6 = await Server.create({
    id: 'S6',
    title: 'Router PUT',
    snippet: `
      individualRouter.put('/', async(req, res, next) => {
        res.status(200).send(/* YOUR UPDATED RESOURCE HERE */)
      });
    `,
  });

  const s7 = await Server.create({
    id: 'S7',
    title: 'Router DELETE',
    snippet: `
      individualRouter.delete('/', async(req, res, next) => {
        res.sendStatus(200)
      });
    `,
  });

  const s8 = await Server.create({
    id: 'S8',
    title: 'Module exports',
    snippet: `
      module.exports = syncAndSeed
    `,
  });

}

module.exports = syncIndividualRouter ;
