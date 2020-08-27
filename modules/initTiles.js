import { selectAll, setProp, select } from './manipFuncs.js';
import updateBoard from './updateBoard.js';
import DOMElems from './DOMElems.js';
const { tileBoard, scoreValue, highScoreValue } = DOMElems;

const initTileCells = (tile) => {
    const allTileCells = selectAll('.tile-cell');
    const empties = [...allTileCells].filter((elem) => !elem.innerHTML);
    const randomEmptyTileCell = empties[Math.trunc(Math.random() * empties.length)];
    setProp(randomEmptyTileCell, 'innerHTML', `<div class="tile tile-${tile}">${tile}</div>`);
};

const initTiles = (boardSize) => {
    const tiles = [2, 4];
    initTileCells(tiles[Math.trunc(Math.random() * tiles.length)]);
    initTileCells(tiles[Math.trunc(Math.random() * tiles.length)]);

    const fontSize = select('.tile-cell').getBoundingClientRect().width;
    tileBoard.style.setProperty('--font', `${fontSize}px`);

    updateBoard(boardSize, tileBoard.innerHTML, Number(scoreValue.textContent), Number(highScoreValue.textContent), fontSize);
};

export default initTiles;
