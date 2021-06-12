const express = require('express');
const app = express();
const path = require('path');
const router = require('./api/router');

const env = require('../env');
process.env.client_id = env.client_id;
process.env.client_secret = env.client_secret;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json())

app.use('/api', router);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/index.html'));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status).send({ error: err.message });
});

app.use(function (req, res, next) {
  res.status(404).send("Are you lost? That page doesn't seem to exist.");
});

app.use(function (err, req, res, next) {
  res.status(500).send({ error: err });
});

module.exports = app;
