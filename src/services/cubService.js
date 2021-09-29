const Cube = require('../models/cube');


const getAll = () => Cube.getAll();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const cubeService = {
    getAll,
    create
};

module.exports = cubeService;