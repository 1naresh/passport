var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var bdms = require('./bdms')
var user = require('./bdm');

var app = express();


mongoose.connect('mongodb://localhost/propmentor')
// app.post('/create',(req,res)=>{
//     user.create({username:"deeksha",id:"1",password:"deeksha"},(err,post)=>{
//         res.json(post)
//     })
// })


passport.use(new Strategy(
    function(username, password, cb) {
      user.findOne({username}, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
      });
    }));


    passport.serializeUser(function(user, cb) {
        cb(null, user.id);
      });
      
      passport.deserializeUser(function(id, cb) {
        user.findOne({id}, function (err, user) {
          if (err) { return cb(err); }
          cb(null, user);
        });
      });


// app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());
app.use('/bdms',bdms)
var mid = require('connect-ensure-login').ensureLoggedIn();
  
// app.post('/login', 
//   passport.authenticate('local'),
//   function(req, res) {
//     res.send({success:true});
//   });
app.post('/signup',(req,res)=>{
    res.send("sign in")
})

app.post('/logout',
function(req, res){
  req.logout();
  res.send({success:true});
});
app.listen(100,()=>console.log('succes'));

