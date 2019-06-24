var express = require('express');
const bodyParser = require('body-parser');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
router.use(bodyParser.json());


/* GET users listing. */
router.route('/')
.get((req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
        return next(err);
    }
    res.json(users);
  })
})
.post((req, res, next) => {
  OwnedSchema.create(req.body)
  .then((owned) => {
      console.log('user Created ', owned);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(owned);
  }, (err) => next(err))
  .catch((err) => next(err));
})
router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if (req.body.firstname)
        user.firstname = req.body.firstname;
      if (req.body.lastname)
        user.lastname = req.body.lastname;
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      });
    }
  });
});

module.exports = router;
