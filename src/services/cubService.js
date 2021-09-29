const Cube = require('../models/cube');


const getAll = () => Cube.getAll();
const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const cubeService = {
    getOne,
    getAll,
    create
};

module.exports = cubeService;