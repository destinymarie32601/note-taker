const express = require('express'); //import required dependencies 
const router = express.Router();
const path = require('path');

router.get('/notes', (req, res) =>  //get the notes
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

router.get('/', (req, res) => //get all
    res.sendFile(path.join(__dirname, '../public.index.html'))
);

//router.get('*', (req, res) =>
 // res.sendFile(path.join(__dirname, '../public/index.html'))
//);

module.exports = router;