import {randInt} from './script.js'
import { Plumber } from './plumber.js';
import { Carpenter } from './carpenter.js';
import { Chef } from './chef.js';
import { Villager } from './villager.js';
import { Client } from './client.js';
export const MAP_WIDTH  = 7;
export const MAP_HEIGHT = 7;
export const MAP_SIZE = MAP_WIDTH * MAP_HEIGHT;

export function createMap() {
    let grid = document.getElementById('map');
    grid.classList.add('grid');
    for (let i = 0; i < MAP_SIZE; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.append(cell);
    }
    grid.style.gridTemplateColumns = `repeat(${MAP_WIDTH}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${MAP_HEIGHT}, 1fr)`;
}

export function spawn(posx, posy) {
    let index = posy * MAP_WIDTH + posx;
    let characters = [
        Plumber,
        Carpenter,
        Villager,
        Client,
        Chef
    ];
    let rand = randInt(0, characters.length-1);
    let type = characters[rand];
    console.log(`spawn ${rand} ${type.name} at (${posx},${posy})`)
    let cell = document.getElementById('map').children[index];
    cell.classList.add(type.name);
}
