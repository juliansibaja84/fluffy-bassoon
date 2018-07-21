const express = require('express');
// const mongoose = require('mongoose');

const APP = express();
const PORT = process.env.PORT || 5656;

APP.get('/api/dreams', (req, res) => {
  res.json({ dream: 'holi' });
});

APP.get('/api/dreams/:id', (req, res) => {
  res.json({ dream: 'holi 2' });
});

APP.get('/api/practices', (req, res) => {
  res.json({ practice: 'holi' });
});

APP.get('/api/practices/:id', (req, res) => {
  res.json({ practice: 'holi 2' });
});

// routes go here

APP.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
