const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  console.log(notesArray);
}

module.exports = { createNewNote };
