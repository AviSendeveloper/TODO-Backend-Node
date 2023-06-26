const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        console.log(process.env.DB_CONNECTION + process.env.DB_DATABASE);
        const connect = await mongoose.connect(process.env.DB_CONNECTION + process.env.DB_DATABASE);
        console.log('Database connected');
    } catch (error) {
        console.log('DB error: ', error);
    }
}

module.exports = connectDB