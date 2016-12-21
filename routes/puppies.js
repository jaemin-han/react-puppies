const express = require('express');
const router = express.Router();
const { getAllPuppies, adoptCutePuppy, likePuppy, abandonPuppy } = require('../models/puppies');

// all routes

// GET ALL PUPPIES
router.get('/', getAllPuppies, (req, res) => {
  res.json(res.puppies || []);
});

// POST A PUPPY
router.post('/', adoptCutePuppy, (req, res) => {
  res.json({ message: 'Puppy has been successfully adopted yay!' });
});

// PUT 'like' A PUPPY
router.put('like/:id', likePuppy, (req, res) => {
  res.json({ message: 'Like that Puppy' });
});

// ABANDON PUPPY sorry
router.delete(':/id', abandonPuppy, (req, res) => {
  res.json({ message: 'successfully Deleted' });
});

module.exports = router;
