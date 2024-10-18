import { Map } from './map.js'

export function diceRoll() {
    let min = 1;
    let max = 20 + 1;
    return randInt(min, max);
}

// random integer [min, max)
export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var map = new Map(7, 7);
map.createHTML();
var position = Math.floor(map.SIZE / 2);
var encounter;
map.spawn(randInt(0, map.WIDTH), randInt(0, map.HEIGHT));
map.spawn(randInt(0, map.WIDTH), randInt(0, map.HEIGHT));
map.spawn(randInt(0, map.WIDTH), randInt(0, map.HEIGHT));
map.spawn(randInt(0, map.WIDTH), randInt(0, map.HEIGHT));
document.getElementById('map').children[position].classList.add('player');
document.addEventListener('keydown', (event) => {
    let from = position;
    let to = from;
    let posx = position % map.WIDTH;
    let posy = Math.floor(position / map.WIDTH);
    if (event.key === "ArrowUp") {
        if (posy - 1 >= 0)
            to -= map.HEIGHT;
    } else if (event.key === "ArrowDown") {
        if (posy + 1 < map.HEIGHT)
            to += map.HEIGHT;
    } else if (event.key === "ArrowLeft") {
        if (posx - 1 >= 0)
            to -= 1;
    } else if (event.key === "ArrowRight") {
        if (posx + 1 < map.WIDTH)
            to += 1;
    }

    //console.log(`position ${posx}.${posy}`);
    move(from, to);
});

function move(from, to) {
    if (encounter) {
        // Already in encounter
        return;
    }

    let cells = document.getElementById('map').children;
    cells[from].classList.remove('player');
    position = to;
    console.log(`Move from ${from} to ${to}.`);
    cells[to].classList.add('player');
    checkEncounter(to);
}

function checkEncounter(index) {
    let cell = document.getElementById('map').children[index];
    const creature = map.grid[index];
    if (creature) {
        // Encounter
        document.getElementById('encounter').style.visibility = 'visible';
        let text = `You encountered a ${creature.constructor.name}.`;
        document.getElementById('encounter-desc').innerText = text;
        encounter = creature;
    } else {
        document.getElementById('encounter').style.visibility = 'hidden';
    }
}

export function flee() {
    console.log("Flee");
    encounter = null;
    let from = position;
    position += 1;
    move(from, position);
    document.getElementById('encounter').style.visibility = 'hidden';
}

export function fight() {
    console.log("Fight");
    delete map.grid[position];
    let cells = document.getElementById('map').children;
    cells[position].classList.remove(encounter.constructor.name);
    encounter = null;
    document.getElementById('encounter').style.visibility = 'hidden';
}

export function barter() {
    console.log("Barter");
}
