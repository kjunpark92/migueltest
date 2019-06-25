const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const Books = require('../models/books')

const bookRouter = express.Router()

bookRouter.use(bodyParser.json())

bookRouter.route('/')
.get((req,res,next) => {
    Books.find({})
    .then((books) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(books);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Books.create(req.body)
    .then((book) => {
        console.log('Book Created ', book);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(book);
    }, (err) => next(err))
    .catch((err) => next(err));
})

bookRouter.route(':/bookId')
.get((req, res, next) => {
    Books.findById(req.params.bookId, (err, book) => {
        if (err) throw err;
        res.json(book);
    });
})
// .put((req, res, next) =>{
//     Books.findByIdAndUpdate(req.params.bookId, {
//         $set: req.body.user
//     }, {
//         new: true
//     }, function (err, book) {
//         if (err) throw err;
//         res.json(book);
//     });
// })
// .put((req, res, next) => {
//     Books.findById(req.params.bookId, (err, book) => {
//         if (err) throw err;
//         book.user.push(req.body.user);
//         book.save((err, book) => {
//             if (err) throw err;
//             res.json(book);
//         });
//     });
// })


module.exports = bookRouter

exports.addUser = function (req, res, next)
{
    // return req;
var user = {"firstname": req.body.firstname, "lastname": req.body.lastname};
Books.findOneAndUpdate({title: req.book.title}, {$push: {user: user}});
};
