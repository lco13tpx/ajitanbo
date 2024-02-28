const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ルートパスへのGETリクエストに対するレスポンス
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// データベース接続
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connection established"))
.catch((error) => console.error("MongoDB connection failed:", error.message));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});