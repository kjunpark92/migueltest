const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const Books = require('../models/books')

const bookRouter = express.Router()

bookRouter.use(bodyParser.json())

bookRouter.route('/')
.get((req,res,next) => {
    Books.find({}, (err, book) => {
        if (err) throw err;
        res.json(book);
    });
})

bookRouter.route(':/bookId')
.get((req, res, next) => {
    Books.findById(req.params.bookId, (err, book) => {
        if (err) throw err;
        res.json(book);
    });
})

module.exports = bookRouter