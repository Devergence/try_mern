const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        console.log('DB is connected');
    } catch (err) {
        console.error(err.messages);
        // Exit process
        process.exit(1);
    }
};

module.exports = connectDB;