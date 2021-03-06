const express = require('express');
const cubeService = require('../services/cubService');

const router = express.Router();

const home = (req, res) => {
    let cubes = cubeService.getAll();
    res.render('index', { cubes });
};

const about = (req, res) => {
    res.render('about');
};

const search = (req, res) => {
    //extract searching parameters from the querystring in url adress
    let { search, from, to } = req.query;

    let cubes = cubeService.search(search, from, to);

    res.render('index', { 
        title: 'SEARCH',
        search,
        from,
        to,
        cubes 
    });
};

router.get('/', home);
router.get('/about', about);
router.get('/search', search);

module.exports = router;