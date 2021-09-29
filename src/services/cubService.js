const Cube = require('../models/cube');


const getAll = () => Cube.getAll();
const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const search = (text, from, to) => {
    let result = Cube.cubes;

    if (text) {
        result = result.filter(x.name.toLowerCase().includes(text.toLowerCase()))
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }

    if (to) {
        result = result.filter(x => x.difficulty <= to);
    }

    return result;
};

const cubeService = {
    getOne,
    getAll,
    create,
    search
};

module.exports = cubeService;