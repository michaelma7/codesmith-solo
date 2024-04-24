const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// catch-all route handler for any requests to an unknown route
// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// route handler to respond with main app
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './../client/index.html'))
);

/**
 * configure express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
