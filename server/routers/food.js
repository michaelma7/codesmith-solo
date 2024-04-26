const express = require('express');
const foodController = require('../controllers/foodController');
const router = express.Router();

// google routes for getting static maps
router.get('/:location', foodController.getFoodItem, (req, res) => {
  return res.status(201).json(res.locals.food);
});

router.post('/', foodController.createFoodItem, (req, res) => {
  return res.status(201).json(res.locals.id);
});

router.patch('/:id', (req, res) => {
  return res.status(201).json();
});

module.exports = router;