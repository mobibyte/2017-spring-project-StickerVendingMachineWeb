const express = require('express');
const bodyParser = require('body-parser');
const io = require('socket.io')();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup the API
app.get('/', (req, res) => {
  res.send('Server up and running');
});

// Socket
io.on('connection', client => {
  console.log('Client connected');
});

app.listen(3000, () => {
  console.log('Server is up and running');
});