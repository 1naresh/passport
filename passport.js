module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
      done(null, user.id);
    }); // if you are using sessions

    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    }); // if you are using sessions

    passport.use(new LocalStrategy(
        function(username, password, cb) {
            user.findOne({username}, function(err, user) {
              if (err) { return cb(err); }
              if (!user) { return cb(null, false); }
              if (user.password != password) { return cb(null, false); }
              return cb(null, user);
            });
          }));
};

// var passport = require('passport');
// var user = require('./bdm')


// passport.use(new Strategy(
//     function(username, password, cb) {
//       user.findOne({username}, function(err, user) {
//         if (err) { return cb(err); }
//         if (!user) { return cb(null, false); }
//         if (user.password != password) { return cb(null, false); }
//         return cb(null, user);
//       });
//     }));


//     passport.serializeUser(function(user, cb) {
//         cb(null, user.id);
//       });
      
//       passport.deserializeUser(function(id, cb) {
//         user.findOne({id}, function (err, user) {
//           if (err) { return cb(err); }
//           cb(null, user);
//         });
//       });