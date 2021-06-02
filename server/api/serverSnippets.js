const serverSnippets = require('express').Router();
const Server = require('../db/model/code_snippets/model-server');

serverSnippets.get('/', async (req, res, next) => {
  try {
    const allServers = await Server.findAll();
    res.status(200).send(allServers);
  } catch (error) {
    console.log('error in serverSnippets router ', error);
    next(error);
  }
});

module.exports = serverSnippets;
