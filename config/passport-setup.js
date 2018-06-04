const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20');

passport.use( new GoogleStartegy({}),()=>{
    
} )