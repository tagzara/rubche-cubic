const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {
            id: 'asjdhikjnhjnlkl8',
            name: 'Mirror Cube',
            description: 'Strange Cube',
            imageUrl: 'http://cdn.shopify.com/s/files/1/0270/0342/0758/products/qiyi-3x3-mirror-cube-silver-2690-d_e59715aa-1350-4bbf-80be-8ae16f035dab_1024x.jpg?v=1610959715',
            difficulty: '4'
        }
    ]
    constructor (name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static getAll() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;