const express = require('express');
const app = express();

app.use(express.json());

app.all((req, res) => {
  console.log('Received notification:', req.body);
  res.status(200).json({ message: 'Notification received' });
});

module.exports = app;
<<<api/log-notification.js 
