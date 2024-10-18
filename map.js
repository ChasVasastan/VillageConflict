export const MAP_WIDTH  = 4;
export const MAP_HEIGHT = 4;
export const MAP_SIZE = MAP_WIDTH * MAP_HEIGHT;

export function createMap() {
    let grid = document.getElementById('map');
    grid.classList.add('grid');
    for (let i = 0; i < MAP_SIZE; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.append(cell);
    }
}
