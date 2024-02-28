// backend/models/Restaurant.js
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  genre: String,
  address: String,
  description: String,
});

module.exports = mongoose.model('Restaurant', restaurantSchema);