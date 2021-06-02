const express = require('express');
const app = express();
const path = require('path');
const router = require('./api/router');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', router);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/index.html'));
});

app.use(function (req, res, next) {
  res.status(404).send("Are you lost? That page doesn't seem to exist.");
});

app.use(function (err, req, res, next) {
  res.status(500).send({ error: err });
});

module.exports = app;
