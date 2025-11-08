const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
    "mongodb+srv://rohanvaid9588_db_user:GfIN1Ei1j1EWL3fH@namastenodejs.jtrkec8.mongodb.net/devTinder"
    );
}

module.exports = connectDB;

