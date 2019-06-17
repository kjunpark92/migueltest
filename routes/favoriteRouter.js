const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const Favorites = require('../models/favorites')

const favoriteRouter = express.Router()

favoriteRouter.use(bodyParser.json())

favoriteRouter.route('/')
.get((req,res,next) => {
    Favorites.find({}, (err, favorite) => {
        if (err) throw err;
        res.json(favorite);
    });
})

favoriteRouter.route(':/favoriteId')
.get((req, res, next) => {
    Favorites.findById(req.params.favoriteId, (err, favorite) => {
        if (err) throw err;
        res.json(favorite);
    });
})

module.exports = favoriteRouter