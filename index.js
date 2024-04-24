const express = require('express');
const bodyParser = require('body-parser'); // Require body-parser
const app = express();
const db = require('./dbConnection');
const User = require('./Modal/UserModal');
const userController = require('./controller/userController');

// Add middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post("/signup", async (req, res) => {
  console.log(req.body, 'kk123');
  let result = await userController.signup(req)
  return res.status(200).json({"message" : result});
});

app.listen(3005);
console.log('Server is running on port 3005');
