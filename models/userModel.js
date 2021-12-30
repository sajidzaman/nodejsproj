var mongoose = require('mongoose');
var config = require('../config/config');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(config.db.url, config.db.options).catch((err)=>{
        console.log(err);
    });
}

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

