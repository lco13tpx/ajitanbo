
const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// 全ての飲食店を取得
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 特定のジャンルの飲食店を取得
router.get('/genre/:genre', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ genre: req.params.genre });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POSTリクエストで新しい飲食店を追加
router.post('/', async (req, res) => {
    const restaurant = new Restaurant({
      name: req.body.name,
      genre: req.body.genre,
      address: req.body.address,
      description: req.body.description
    });
  
    try {
      const newRestaurant = await restaurant.save();
      res.status(201).json(newRestaurant);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

module.exports = router;