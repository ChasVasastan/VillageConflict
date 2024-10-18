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

var map = new Map(9, 9);
map.createHTML();
var previousPosition = 0;
var position = 0;
var encounter;
map.spawn(randInt(1, map.WIDTH), randInt(1, map.HEIGHT));
map.spawn(randInt(1, map.WIDTH), randInt(1, map.HEIGHT));
map.spawn(randInt(1, map.WIDTH), randInt(1, map.HEIGHT));
map.spawn(randInt(1, map.WIDTH), randInt(1, map.HEIGHT));
move(position, position);
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

    move(from, to);
});

function move(from, to) {
    if (encounter) {
        // Already in encounter
        return;
    }

    let cells = document.getElementById('map').children;
    cells[from].classList.remove('player');
    previousPosition = position;
    position = to;
    console.log(`Move from ${from} to ${to}.`);
    cells[to].classList.add('player');
    checkEncounter(to);
}

function checkEncounter(index) {
    const creature = map.grid[index];
    if (creature) {
        // Encounter
        let text = `You encountered a ${creature.constructor.name}.`;
        log(text);
        showEncounter(text);
        encounter = creature;
    } else {
        hideEncounter();
    }
}

export function flee() {
    let text = `You decided to flee. You are a coward.`;
    log(text);
    hideEncounter();
    move(position, previousPosition);
}

export function fight() {
    let text = `You fought a ${encounter.constructor.name} and won.`;
    log(text);
    delete map.grid[position];
    let cells = document.getElementById('map').children;
    cells[position].classList.remove(encounter.constructor.name);
    hideEncounter();
}

export function barter() {
    let text = `You decided to barter with ${encounter.constructor.name}. Your offer was rejected.`;
    log(text);
    hideEncounter();
    move(position, previousPosition);
}

function showEncounter(text) {
    document.getElementById('encounter').style.visibility = 'visible';
    document.getElementById('encounter-desc').innerText = text;
}

function hideEncounter() {
    encounter = null;
    document.getElementById('encounter').style.visibility = 'hidden';
}

function log(text) {
    let log = document.getElementById('log');
    log.append(text + '\n');
    log.scrollTop = log.scrollHeight; // scroll to bottom
}