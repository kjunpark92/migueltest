const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var favoriteSchema = new Schema({
  books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
}, {
  timestamps: true
});

var Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;