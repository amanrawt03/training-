const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/json', (req, res) => {
  res.json({ message: 'This is a JSON response' });
});

app.get('/html', (req, res) => {
  res.send('<h1>HTML Response</h1>');
});

app.get('/redirect', (req, res) => {
  res.redirect('https://www.google.com');
});

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'example.txt'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
