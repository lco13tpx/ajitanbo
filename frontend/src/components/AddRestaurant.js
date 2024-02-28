// src/components/AddRestaurant.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddRestaurant.css'; // スタイルシートのパスを適宜調整してください

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    address: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/restaurants', formData);
      alert('飲食店が追加されました！');
      // フォームをリセット
      setFormData({
        name: '',
        genre: '',
        address: '',
        description: '',
      });
    } catch (error) {
      console.error("Error adding restaurant:", error);
      alert('飲食店の追加に失敗しました。');
    }
  };

  return (
    <form className="add-restaurant-form" onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="店名" required />
      <input type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder
