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