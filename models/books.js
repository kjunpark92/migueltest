const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    free: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
  });

const Books = mongoose.model('Book', bookSchema)

module.exports = Books;