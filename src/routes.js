const express = require('express');

const homeControler = require('./controlers/homeControler');
const cubeControler = require('./controlers/cubeControler');

const router = express.Router();

router.use(homeControler);
router.use('/cube', cubeControler);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;