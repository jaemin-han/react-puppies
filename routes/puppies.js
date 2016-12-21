const express = require('express');
const router = express.Router();
const { getAllPuppies } = require('../models/puppies');

// all routes

// GET ALL PUPPIES
router.get('/', getAllPuppies, (req, res) => {
  res.json(res.puppies || []);
});

// POST A PUPPIES
// router.post('/', adoptCutePuppies, (req, res) => {
//   res.json({ message: 'Puppy has been successfully adopted yay!' });
// });

module.exports = router;
