const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => { console.log("Connected to DB") })
    .catch(err => { console.log("Failed to connect to DB: ", err) });
}

module.exports = connectToDB;