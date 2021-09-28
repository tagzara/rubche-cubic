const express = require('express');
const path = require('path');

const initHandlebars = require('./configuration/handlebars.js');

const app = express();

initHandlebars(app);

// this make app to use css and images in public folder
app.use(express.static(path.resolve(__dirname, './public')));

app.all('/', (req, res) => {
    res.render('index');
});

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));