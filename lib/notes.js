const fs = require("fs");
const path = require("path");

function addNote (note,notes) {
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return notes;
}

function deleteNote (id,notesArray) {
    let notes = notesArray.filter(note => note.id != id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return notes;
}

module.exports = {
    addNote,
    deleteNote
};