const express = require('express');

// importing the router from express
const router = express.Router();

// creating a function that rendering a create view
const createCube = (req, res) => {
    res.render('create');
}

// that function will be exposed with router to the page route
router.get('/create', createCube);

module.exports = router;