const fs = require('fs/promises');
const fsCallback = require('fs');
const path = require('path');

// helper function to create googleController error objects
// return value will be the object we pass into next, invoking global error handler
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `googleController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in googleController.${method}. Check server logs for more details.`,
    },
  };
};

const googleController = {};

module.exports = googleController;
