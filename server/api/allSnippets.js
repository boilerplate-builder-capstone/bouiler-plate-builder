const allSnippets = require('express').Router();
const Code = require('../db/models/Code');

allSnippets.get('/', async (req, res, next) => {
  try {
    const allServers = await Code.findAll();
    res.status(200).send(allServers);
  } catch (error) {
    console.log('error in allSnippets router ', error);
    next(error);
  }
});

module.exports = allSnippets;
