var express = require('express');
var passport = require('passport')
var router = express.Router()
var mid = require('connect-ensure-login').ensureLoggedIn();

router.post('/login', 
  passport.authenticate('local'),
  function(req, res) {
    res.send({success:true});
  });
router.post('/signup1',mid,(req,res)=>{
    res.send("sign in")
  })
  

module.exports =router; 