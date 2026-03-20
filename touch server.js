require('dotenv').config(); // Load biến môi trường từ file .env [cite: 102]
const express = require('express'); [cite: 103]
const mongoose = require('mongoose'); [cite: 104]
const cors = require('cors'); [cite: 105]

const app = express(); [cite: 106]
const port = process.env.PORT || 5000; [cite: 107]
const mongoUri = process.env.MONGO_URI; // Chuỗi kết nối sẽ lấy từ MongoDB Atlas [cite: 108]

// Middleware [cite: 109]
app.use(cors()); [cite: 110]
app.use(express.json()); [cite: 111]

// API Route cơ bản [cite: 112]
app.get('/', (req, res) => {
    res.send('MERN Backend is running!'); [cite: 113, 115]
});

// Kết nối MongoDB [cite: 116]
if (mongoUri) {
    mongoose.connect(mongoUri)
        .then(() => console.log('MongoDB connected successfully!')) [cite: 121, 123]
        .catch(err => console.error('MongoDB connection error:', err)); [cite: 122, 123]
}

// Khởi động server [cite: 124]
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); [cite: 125, 126]
});