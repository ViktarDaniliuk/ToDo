const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/key');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 5050;

const app = express();

const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.use(todoRoutes);

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