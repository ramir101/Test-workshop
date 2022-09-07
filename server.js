const express = require('express');
const { Artist, Song } = require('./db');
const app = express();

const port = 3000;

app.get('/api/artists', async(req, res, next) => {
    try {
        res.send(await Artist.findAll());
    } 
    catch (error) {
        next(error)
    }
})

app.get('/api/songs', async(req, res, next) => {
    try {
        res.send(await Song.findAll());
    } 
    catch (error) {
        next(error)
    }
})

module.exports = app