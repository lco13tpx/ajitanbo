// src/components/RestaurantDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RestaurantDetail.css'; // スタイルシートのパスを適宜調整してください

const RestaurantDetail = ({ match }) => {
  const [restaurant, setRestaurant] = useState({});
  const restaurantId = match.params.id;

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        const response = await axios.get(`/api/restaurants/${restaurantId}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetail();
  }, [restaurantId]);

  return (
    <div className="restaurant-detail-container">
      <h2>{restaurant.name}</h2>
      <p>ジャンル: {restaurant.genre}</p>
      <p>住所: {restaurant.address}</p>
      <p>説明: {restaurant.description}</p>
    </div>
  );
};

export default RestaurantDetail;