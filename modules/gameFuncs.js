import DOMElems from './DOMElems.js';
import { setProp, selectAll } from './manipFuncs.js';
import initTiles from './initTiles.js';
const { scoreValue, highScoreValue } = DOMElems;

const grabNum = (str) => Number(str.slice(str.lastIndexOf('-') + 1));

const updateScores = (score) => {
    const currScore = Number(scoreValue.textContent);
    const highScore = Number(highScoreValue.textContent);
    const newCurrScore = currScore + score;
    if (currScore >= highScore) {
        setProp(scoreValue, 'textContent', newCurrScore);
        setProp(highScoreValue, 'textContent', newCurrScore);
    } else {
        setProp(scoreValue, 'textContent', newCurrScore);
    }
};

const generateNewTile = () => {
    const allTileCells = selectAll('.tile-cell');
    const empties = [...allTileCells].filter((elem) => !elem.innerHTML);
    const randomEmptyTileCell = empties[Math.trunc(Math.random() * empties.length)];

    const tiles = [2, 4];
    const tile = tiles[Math.trunc(Math.random() * tiles.length)];

    setProp(randomEmptyTileCell, 'innerHTML', `<div class="tile tile-${tile}">${tile}</div>`);
};

const declareWin = () => {

};

const checkGameOver = () => {

};

const declareGameOver = () => {

};

const undoGame = (boardSize) => {

};

const restartGame = (boardSize) => {
    [...selectAll('.tile-cell')].map((elem) => setProp(elem, 'innerHTML', ''));
    initTiles(boardSize);
};

export {
    updateScores,
    grabNum,
    generateNewTile,
    declareWin,
    checkGameOver,
    declareGameOver,
    restartGame,
};
