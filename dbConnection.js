const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anuj:HM%4012345@cluster0.tbancp1.mongodb.net/UserData')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));