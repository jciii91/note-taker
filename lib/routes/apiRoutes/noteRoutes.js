const {} = require('../../notes');
const { notes } = require('../../../db/db.json');
const router = require('express').Router();

router.get('/api/notes', (req, res) => {
    res.json(notes);
});

module.exports  = router;