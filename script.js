import { createMap, MAP_HEIGHT, MAP_WIDTH, MAP_SIZE, spawn} from './map.js'

var position = Math.floor(MAP_SIZE / 2);

function successRate() {
    let min = 1;
    let max = 20;
    return randInt(min, max);
}

// random integer [min, max]
export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

createMap();
spawn(randInt(0, MAP_WIDTH - 1), randInt(0, MAP_HEIGHT - 1));
spawn(randInt(0, MAP_WIDTH - 1), randInt(0, MAP_HEIGHT - 1));
spawn(randInt(0, MAP_WIDTH - 1), randInt(0, MAP_HEIGHT - 1));
spawn(randInt(0, MAP_WIDTH - 1), randInt(0, MAP_HEIGHT - 1));
document.getElementById('map').children[position].classList.add('player');
document.addEventListener('keydown', (event) => {
    let cells = document.getElementById('map').children;
    cells[position].classList.remove('player');
    let posx = position % MAP_WIDTH;
    let posy = Math.floor(position / MAP_WIDTH);
    if (event.key === "ArrowUp") {
        if (posy - 1 >= 0)
            position -= MAP_HEIGHT;
    } else if (event.key === "ArrowDown") {
        if (posy + 1 < MAP_HEIGHT)
            position += MAP_HEIGHT;
    } else if (event.key === "ArrowLeft") {
        if (posx - 1 >= 0)
            position -= 1;
    } else if (event.key === "ArrowRight") {
        if (posx + 1 < MAP_WIDTH)
            position += 1;
    }

    cells[position].classList.add('player');
    //console.log(`position ${posx}.${posy}`);
    checkEncounter(position)
});

function checkEncounter(index) {
    let cell = document.getElementById('map').children[index];
    const creatures = Array.from(cell.classList).filter(className =>
        className != "cell" && className != "player");
    if (creatures.length > 0) {
        // Encounter
        document.getElementById('encounter').style.visibility = 'visible';
        let text = `You encountered a ${creatures}.`;
        document.getElementById('encounter-desc').innerText = text;
    } else {
        document.getElementById('encounter').style.visibility = 'hidden';
    }
}