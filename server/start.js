

const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');

const db = require('../db');
const app = express();
const PORT = 1313; // '1337' is boring

if (process.env.NODE_ENV !== 'production') {
  // Logging middleware (non-production only)
  app.use(require('volleyball'));
}

//The code below works because `.use` returns `this` which is `app`. So what we want to return in the `module.exports` is `app`, and we can chain on that declaration because each method invocation returns `app` after mutating based on the middleware functions
module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .use('/api', require('./api')) // Serve our api
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) // Send index.html for any other requests.
  .use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal error');
  });

if (module === require.main) {
  db.sync()
  .then(() => {
    console.log('The database has been synced.');
    app.listen(PORT, () => console.log(`The server is on at port ${PORT}`));
  });
}
