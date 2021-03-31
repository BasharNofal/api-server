'use strict';

require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    require('./src/server.js').start(process.env.PORT);
}).catch(error => {
    console.log('An error occurred while connecting to database', error);
});

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://bashar:9971011997@cluster0.axhe7.mongodb.net/api?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
