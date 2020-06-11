const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/key');

const PORT = process.env.PORT || 5050;

const app = express();

async function start() {
   try {
      await mongoose.connect(config.mongoURI, {
         useNewUrlParser: true,
         useFindAndModify: false,
         useUnifiedTopology: true
      });

      app.listen(PORT, () => {
         console.log(`Server has been started ${PORT}`);
      });
   } catch (e) {
      console.log(e);
   }
};

start();