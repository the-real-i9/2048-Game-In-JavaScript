import {
    currentBoardSizeID,
} from './currents.js';
import {
    grabNum,
    generateNewTile,
} from './gameFuncs.js';

import updateBoardObject from './updateBoardObject.js';
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
        updateBoardObject(currentBoardSizeID, tileBoard.innerHTML, scoreValue.textContent, highScoreValue.textContent);
    }
};

export default playGame;
