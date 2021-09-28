const express = require('express');

const cubeService = require('../services/cubService');

// importing the router from express
const router = express.Router();

// creating a function that rendering a create view
const getCreateCubePage = (req, res) => {
    let cubes = cubeService.getAll();
    console.log(cubes);

    res.render('create');
}

const createCube = (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;

    cubeService.create(name, description, imageUrl, difficulty);

    res.redirect('/cube/create');
}

// that function will be exposed with router to the page route
router.get('/create', getCreateCubePage);
router.post('/create', createCube);

module.exports = router;