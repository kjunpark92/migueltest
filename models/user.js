var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const OwnedSchema = new Schema({
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
    owned: [OwnedSchema]
});

User.plugin(passportLocalMongoose);
OwnedSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
module.exports = mongoose.model('OwnedSchema', OwnedSchema);