const express = require('express'); //import required dependencies
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); //import uuid for unique ids
const fs = require('fs'); //import file system

router.get('/notes', async (req, res) => {
    const dbJson = fs.readFileSync('./db/db.json', 'utf8'); //read db.json file
    res.json(JSON.parse(dbJson)); //parse data to send it as response
});

router.post('/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('./db/db.json', 'utf8')); //read db file and parse as json

    const newNote = { 
        id: uuidv4(), //generating unique id 
        title: req.body.title, //get title and text from request body
        text:req.body.text
    };

    dbJson.push(newNote); //add new note to existing notes
    fs.writeFileSync('./db/db.json', JSON.stringify(dbJson)); //write updated notes to the db.json file
    res.json(dbJson);
});

module.exports = router; //export router
