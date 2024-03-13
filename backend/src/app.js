const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const authController = require('./controllers/authController');
const quizController = require('./controllers/quizController');
const omrController = require('./controllers/omrController');
const chatbotController = require('./controllers/chatbotController');
const PORT = process.env.PORT || 8080;

const publicPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../template/views');
const partialsPath = path.join(__dirname, '../template/partials');

// Database Connection
require('./db/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// Mount auth controller
app.use('/', authController);

// Mount other controllers
app.use('/quiz', quizController);
app.use('/omr', omrController);
app.use('/chatbot', chatbotController);

app.listen(PORT, () => {
  console.log(`App is listening at PORT ${PORT}`);
});
