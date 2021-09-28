const Cube = require('../models/cube');

const cubeDb = [];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
};

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;