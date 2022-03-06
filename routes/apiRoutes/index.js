const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  // Set ID to timestamp
  req.body.id = Date.now().toString();

  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;
