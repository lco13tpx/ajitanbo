import './RestaurantsList.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axios.get('/api/restaurants');
      setRestaurants(response.data);
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="restaurants-container">
      <h2 className="restaurants-title">飲食店リスト</h2>
      <ul className="restaurants-list">
        {restaurants.map(restaurant => (
          <li key={restaurant._id}>
            <span className="restaurant-name">{restaurant.name}</span> - 
            <span className="restaurant-genre">{restaurant.genre}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantsList;