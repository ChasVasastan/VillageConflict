import { createMap, MAP_HEIGHT, MAP_WIDTH, MAP_SIZE} from './map.js'

var position = 0;

function successRate() {
    let min = 1;
    let max = 20;
    return randInt(min, max);
}

function randInt(min, max) {
    return Math.random() * (max - min + 1) + min;
}

createMap();
document.getElementById('map').children[position].classList.add('active');
document.addEventListener('keydown', (event) => {
    let cells = document.getElementById('map').children;
    cells[position].classList.remove('active');
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

    cells[position].classList.add('active');
    console.log(`position ${posx}.${posy}`);
});