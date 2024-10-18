import {randInt} from './script.js'
import { Plumber } from './plumber.js';
import { Carpenter } from './carpenter.js';
import { Chef } from './chef.js';
import { Villager } from './villager.js';
import { Client } from './client.js';

export class Map {
    constructor(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        this.SIZE = width * height;
        this.grid = {};
    }

    createHTML() {
        let grid = document.getElementById('map');
        grid.classList.add('grid');
        for (let i = 0; i < this.SIZE; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            grid.append(cell);
        }
        grid.style.gridTemplateColumns = `repeat(${this.WIDTH}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${this.HEIGHT}, 1fr)`;
    }

    spawn(posx, posy) {
        let index = posy * this.WIDTH + posx;
        let characters = [
            Plumber,
            Carpenter,
            Villager,
            Client,
            Chef
        ];
        let rand = randInt(0, characters.length);
        let type = characters[rand];
        console.log(`spawn ${rand} ${type.name} at (${posx},${posy})`);
        this.grid[index] = new type;
        let cell = document.getElementById('map').children[index];
        cell.classList.add(type.name);
    }

}