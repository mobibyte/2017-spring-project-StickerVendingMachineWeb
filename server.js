const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Pusher
const pusher = new Pusher({
  appId: '309787',
  key: '5a3e0612577fdbe1d797',
  secret: '3d0a3bf7dfa670293c02',
  encrypted: true
});

// Setup the API
app.get('/', (req, res) => {
  res.send('Server up and running');
});

app.get('/ping', (req, res) => {
  pusher.trigger('machine', 'pong', {});
  res.send();
});

app.get('/lol', (req, res) => {
  pusher.trigger('machine', 'text', req.query.text);
  res.send();
})

app.listen(8080, () => {
  console.log('Server is up and running');
});