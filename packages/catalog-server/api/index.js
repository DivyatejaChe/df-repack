const express = require('express');

// if running on vercel, use generated .prod configs
const env = process.env.VERCEL ? '.prod' : '.dev';
const suffix = env + '.json';

const host = require('../data/host' + suffix);
const account = require('../data/account' + suffix);
const loan = require('../data/loan' + suffix);

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/host', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.appVersion;

  res.send(host[platform][appVersion]);
});

app.get('/account', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.appVersion;

  res.send(account[platform][appVersion]);
});

app.get('/loan', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.appVersion;

  res.send(loan[platform][appVersion]);
});

app.listen(port, () => {
  console.log(`[CatalogServer] Server listening at port ${port} `);
});

module.exports = app;
