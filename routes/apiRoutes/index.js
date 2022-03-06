const router = require('express').Router();
const { findById, createNewNote, deleteSavedNote } = require('../../lib/notes');
let { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  // Set ID to timestamp
  req.body.id = Date.now().toString();

  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  notes = deleteSavedNote(id, notes);
  res.json(notes);
});

module.exports = router;
