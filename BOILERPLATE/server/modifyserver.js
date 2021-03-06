const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const individualRouter = require('./routes/individualrouter');
app.use('/YOUR-MOUNTED-PATH', individualRouter);

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/htmlIndex.html'));
});

app.use(function (req, res, next) {
  res.status(404).send("Are you lost? That page doesn't seem to exist.");
});

app.use(function (err, req, res, next) {
  res.status(500).send({ error: err });
});

module.exports = app;
