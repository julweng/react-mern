const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url = `mongodb+srv://johndoe:${process.env.PASSWORD}@cluster0-rlnbo.mongodb.net/react-mern?retryWrites=true&w=majority`;
mongoose
  .connect(url, {useNewUrlParser: true})
  .then(() => console.log('DB connected'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(5000);
