import {
    currentBoardSizeID,
} from './currents.js';
import {
    generateNewTile,
} from './gameFuncs.js';

import { grabNum } from './handyFuncs.js';

import {
    updateBoardObject,
} from './updateBoardObject.js';
import DOMElems from './DOMElems.js';
const {
    tileBoard,
    scoreValue,
    highScoreValue,
} = DOMElems;

const playGame = (move) => {
    const boardSize = grabNum(currentBoardSizeID);
    const movementOcurred = move(boardSize);

    if (movementOcurred) {
        generateNewTile();
        updateBoardObject({
            boardSize: currentBoardSizeID,
            boardState: tileBoard.innerHTML,
            score: scoreValue.textContent,
            highScore: highScoreValue.textContent,
        });
    }
};

export default playGame;
