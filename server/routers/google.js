const express = require('express');
const googleController = require('../controllers/googleController');
const fetch = require('node-fetch');
const router = express.Router();

// google routes for getting static maps
router.get('/', googleController.getKey, (req, res) => {
  console.log(res.locals.key);
  return res.status(201).json(res.locals.key);
});

module.exports = router;
