var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const Owned = new Schema({
  title: {
    type: String,
    required: true
  },
  free: {
    type: Boolean,
    required: true
  }
},{
    timestamps: true
  });

var User = new Schema({
    firstname: {
      type: String,
        default: ''
    },
    lastname: {
      type: String,
        default: ''
    },
    owned: [Owned]
});

User.plugin(passportLocalMongoose);
// Owned.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
// module.exports = mongoose.model('Owned', Owned);