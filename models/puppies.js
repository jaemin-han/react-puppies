const db = require('../lib/dbConnect');

// GET ALL PUPPIES
function getAllPuppies(req, res, next) {
  db.any('SELECT * FROM reactpuppies2;')
    .then((puppies) => {
      res.puppies = puppies;
      next();
    })
    .catch(error => next(error));
}

// POST A CUTE PUPPIES
function adoptCutePuppy(req, res, next) {
  db.one(`INSERT INTO reactpuppies2 (name, url) VALUES ($1, $2)`, [req.body.name, req.body.url])
    .then(next())
    .catch(err => next(err));
}

// ABANDON PUPPY sad...
function abandonPuppy(req, res, next) {
  db.none(`DELETE FROM reactpuppies2 WHERE id=$1;`, [req.params.id])
  .then(next())
  .catch(err => next(err));
}

// LIKE PUPPY yes!
function likePuppy(req, res, next) {
  db.one(`UPDATE reactpuppies2
          SET likes = likes + 1
          WHERE id = $1`,
          [req.params.id])
    .then(next())
    .catch(err => next(err));
}

module.exports = {
  getAllPuppies,
  adoptCutePuppy,
  abandonPuppy,
  likePuppy
}
