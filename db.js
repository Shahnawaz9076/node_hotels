const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';


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