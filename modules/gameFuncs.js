import DOMElems from './DOMElems.js';
import {
    setProp,
    selectAll,
    setStyle,
} from './manipFuncs.js';
import initTiles from './initTiles.js';
import { updatePreviousBoardObject, undoBoardObject } from './updateBoardObject.js';
import { boardsDatabase } from './boardsStorage.js';
import renderBoard from './boardRender.js';
const {
    scoreValue,
    highScoreValue,
    topSection,
    modals,
} = DOMElems;


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

    const tiles = [2, 2, 2, 2, 2, 4];
    const tile = tiles[Math.trunc(Math.random() * tiles.length)];

    setProp(randomEmptyTileCell, 'innerHTML', `<div class="tile tile-${tile}">${tile}</div>`);
};

const checkGameOver = () => {

};

const declareGameOver = () => {

};

const undoGame = (boardSize) => {
    const boardObject = boardsDatabase.get(boardSize);
    if (boardObject.previousBoardState === boardObject.currentBoardState) {
        console.log("You can't undo twice");
        return;
    }

    if (boardObject.previousBoardState) {
        undoBoardObject(boardSize);
        renderBoard(boardSize);
    }
};

const restartGame = (boardSize) => {
    [...selectAll('.tile-cell')].map((elem) => setProp(elem, 'innerHTML', ''));
    setProp(scoreValue, 'textContent', 0);
    initTiles(boardSize);
    updatePreviousBoardObject({
        boardSize,
        boardState: null,
        currentScore: null,
        highScore: null,
    });
    [...modals].map((elem) => setStyle(elem, 'display', 'none'));
};

const displayModal = (type) => {
    switch (type) {
        case 'restart-cancel':
            setStyle([...modals][0], 'display', 'flex');
            break;
        case 'continue-newgame':
            setStyle([...modals][1], 'display', 'flex');
            break;
        case 'undo-restart':
            setStyle([...modals][2], 'display', 'flex');
            break;
        default:
    }
    topSection.style.setProperty('--content', ' ');
};

const terminateAction = () => {
    [...modals].map((elem) => setStyle(elem, 'display', 'none'));
};

const declareWin = () => {
    displayModal('continue-newgame');
};

export {
    updateScores,
    generateNewTile,
    declareWin,
    checkGameOver,
    declareGameOver,
    restartGame,
    displayModal,
    terminateAction,
    undoGame,
};
