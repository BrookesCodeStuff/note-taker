const router = require('express').Router();
const { findById, createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
});

router.post('/notes', (req, res) => {
  // Set ID to timestamp
  req.body.id = Date.now().toString();

  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  deleteNote(id, notes);
  res.status(204).send();
});

module.exports = router;
