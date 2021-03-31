'use strict';

const mongoose = require('mongoose');

const url = `mongodb+srv://bashar:9971011997@cluster0.mongodb.net/api?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
// mongoose.connect(url,connectionParams)
mongoose.connect(url, connectionParams)
  .then(() => {
    console.log('Connected to database ')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });