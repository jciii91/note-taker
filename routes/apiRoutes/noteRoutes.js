const { addNote,deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const router = require('express').Router();
const {v1 : uuidv1} = require('uuid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv1();

    const note = req.body;
    let notesArray = addNote(note,notes);
    
    res.json(notesArray);
});

router.delete('/notes/:id', (req, res) => {
    let notesArray = deleteNote(req.params.id,notes);
    res.json(notesArray);
});

module.exports  = router;