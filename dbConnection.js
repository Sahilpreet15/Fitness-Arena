const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sahilpreetsaini15:17102001@cluster0.0ijww8n.mongodb.net/')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));