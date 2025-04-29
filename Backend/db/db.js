const mongoose = require('mongoose');

function connectToDB() {
    console.log("process.env.DB_CONNECT: ", process.env.DB_CONNECT);
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => { console.log("Connceted to DB") })
    .catch(err => { console.log("Failed to connect to DB: ", err) });
}

module.exports = connectToDB;