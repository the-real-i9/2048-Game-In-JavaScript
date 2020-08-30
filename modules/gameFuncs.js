import DOMElems from './DOMElems.js';
import {
    setProp,
    selectAll,
    setStyle,
} from './manipFuncs.js';
import initTiles from './initTiles.js';
import { updatePreviousBoardObject, undoBoardObject, setBoardObjectGameWon } from './updateBoardObject.js';
import { boardsDatabase } from './boardsStorage.js';
import renderBoard from './boardRender.js';
import { terminateAction } from './handyFuncs.js';
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

    const tiles = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4];
    const tile = tiles[Math.trunc(Math.random() * tiles.length)];

    setProp(randomEmptyTileCell, 'innerHTML', `<div class="tile tile-${tile}">${tile}</div>`);
};

const isGameOver = (boardSizeNum) => {
    const allTileCells = selectAll('.tile-cell');
    const boardFilled = [...allTileCells].every((elem) => elem.innerHTML);
    const re = />(\d+)<\//;
    if (boardFilled) {
        const rowNums = [];
        const colNums = [];
        for (let r = 0; r < boardSizeNum; r++) {
            const rowTileNum = [...allTileCells]
                .filter((elem) => elem.classList.contains(`row-${r}`))
                .map((elem) => Number(elem.innerHTML.match(re)[1]));
            rowNums.push(rowTileNum);
        }

        for (let c = 0; c < boardSizeNum; c++) {
            const colTileNum = [...allTileCells]
                .filter((elem) => elem.classList.contains(`col-${c}`))
                .map((elem) => Number(elem.innerHTML.match(re)[1]));
            colNums.push(colTileNum);
        }

        for (const el of rowNums) {
            for (let i = 0; i < el.length; i++) {
                if (i > 0 && el[i] === el[i - 1]) return false;
            }
        }

        for (const el of colNums) {
            for (let i = 0; i < el.length; i++) {
                if (i > 0 && el[i] === el[i - 1]) return false;
            }
        }
        return true;
    }

    return false;
};

const undoGame = (boardSize) => {
    const boardObject = boardsDatabase.get(boardSize);
    if (boardObject.previousBoardState === boardObject.currentBoardState) {
        // console.log("You can't undo twice");
        // show pop up here
        return;
    }

    if (boardObject.previousBoardState) {
        undoBoardObject(boardSize);
        renderBoard(boardSize);
    }
    terminateAction();
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
    terminateAction();
    setBoardObjectGameWon(boardSize, false);
};

const displayModal = (type) => {
    topSection.style.setProperty('--display', 'block');
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
};

const declareWin = () => {
    displayModal('continue-newgame');
};

const declareGameOver = () => {
    displayModal('undo-restart');
};

const resetGame = () => {
    boardsDatabase.clear();
};

export {
    updateScores,
    generateNewTile,
    declareWin,
    isGameOver,
    declareGameOver,
    restartGame,
    displayModal,
    undoGame,
    resetGame,
};
