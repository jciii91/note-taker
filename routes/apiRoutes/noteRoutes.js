const {} = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const {v1 : uuidv1} = require('uuid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv1();

    const note = req.body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    res.json(notes);
})

module.exports  = router;