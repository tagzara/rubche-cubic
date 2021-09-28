const express = require('express');
const path = require('path');
const routes = require('./routes');

const initHandlebars = require('./configuration/handlebars.js');

const app = express();
// it makes possible parsing data
app.use(express.urlencoded({extended: true}));

initHandlebars(app);

// this make app to use css and images in public folder
//express.static позволява да се хостват статични файлове като ресурси, които могат да бъдат взети от браузъра
app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));