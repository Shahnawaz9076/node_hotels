const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = process.env.MONGODB_URL_LOCAL;

const mongoURL = process.env.MONGODB_URL;


const db = mongoose.connection;

mongoose.connect(mongoURL, {

})

db.on('connected', ()=>{
    console.log('connected to mongodb server');
})

db.on('error', (err)=>{
    console.log('mongodb connection error:', err);
})

db.on('disconnected', ()=>{
    console.log('mongodb disconnected');
})

module.exports = db;