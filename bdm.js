var mongoose =require('mongoose');

var schema = new mongoose.Schema({
    username: String,
    password: String,
    id:String
})

module.exports =mongoose.model('user',schema)