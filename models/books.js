const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    pages: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
  });

const Books = mongoose.model('Book', bookSchema)

module.exports = Books;