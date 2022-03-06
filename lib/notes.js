const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function deleteSavedNote(id, notesArray) {
  const updatedArray = notesArray.filter((note) => note.id !== id);
  fs.writeFile(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: updatedArray }, null, 2),
    (err) => {
      if (err) throw err;
    }
  );
  return updatedArray;
}

module.exports = { findById, createNewNote, deleteSavedNote };
