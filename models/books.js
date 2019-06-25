const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: {
      type: String,
        default: ''
    },
    lastname: {
      type: String,
        default: ''
    }
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User'
    // }
});

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    free: {
        type: Boolean,
        required: true
    },
    user: [userSchema]
}, {
    timestamps: true
  });

const Books = mongoose.model('Book', bookSchema)

module.exports = Books;