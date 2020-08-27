import { selectAll, setProp } from './manipFuncs.js';

const initTileCells = (tile) => {
    const allTileCells = selectAll('.tile-cell');
    const empties = [...allTileCells].filter((elem) => !elem.innerHTML);
    const randomEmptyTileCell = empties[Math.trunc(Math.random() * empties.length)];
    setProp(randomEmptyTileCell, 'innerHTML', `<div class="tile tile-${tile}">${tile}</div>`);
};

const initTiles = () => {
    const tiles = [2, 4];
    initTileCells(tiles[Math.trunc(Math.random() * tiles.length)]);
    initTileCells(tiles[Math.trunc(Math.random() * tiles.length)]);
};

export default initTiles;
