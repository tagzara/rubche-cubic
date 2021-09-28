const express = require('express');

const homeControler = require('./controlers/homeControler');
const cubeControler = require('./controlers/cubeControler');

const router = express.Router();

router.use(homeControler);
router.use('/cube', cubeControler);

module.exports = router;