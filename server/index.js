const express = require('express');
const app = express();
const getJson = require('get-json');
const fs = require('fs');
const port = 3001;
const cors = require('cors');
app.use(cors());
app.use(express.json());
const database_path = './songs.json'

let songs = [];
try {
    songs = require(database_path);
} catch (error) {
    console.error('Error reading the JSON file');
}

async function saveData() {
    try {
        await fs.writeFileSync(database_path, JSON.stringify(songs, null, 2));
    } catch (error) {
        console.error('Error writing to the JSON file:', error.message);
    }
}

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

// get all songs
app.get('/songs', (req, res) => {
    res.json(songs);
});

// get specific song
app.get('/songs/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < songs.length) {
      res.json(songs[id]);
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
  });

// create a new song
app.post('/songs', (req, res) => {
    const {title, artist} = req.body;
    const newSong = { title, artist };
    songs.push(newSong);
    saveData();
    res.status(201).json(newSong);
});

// edit a song
app.put('/songs/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < songs.length) {
        const {title, artist} = req.body;
        if (title && artist) {
        songs[id] = {title, artist};
        saveData();
        res.json(songs[id]);
        } else {
        res.status(400).json({ error: 'Invalid request. Song name and artist are required.' });
        }
    } else {
    res.status(404).json({ error: 'Song not found' });
}
});


// delete a song
app.delete('/songs/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < songs.length) {
        const deletedSong = songs.splice(id, 1);
        saveData();
        res.json(deletedSong[0]);
    } else {
        res.status(404).json({ error: 'Song not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});