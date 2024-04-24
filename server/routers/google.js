const express = require('express');

const googleController = require('../controllers/googleController');

const router = express.Router();

//google routes for getting static maps
// router.get('/', googleController.getCharacters, (req, res) => {
//   return res.status(200).json(res.locals.characters);
// });

module.exports = router;
