import {
    currentBoardSizeID,
    isPlaySound,
} from './currents.js';
import {
    generateNewTile,
    isGameOver,
    declareGameOver,
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

const bubbleSound = new Audio('../sound/bubble.mp3');

const playGame = (move) => {
    const boardSize = grabNum(currentBoardSizeID);
    const movementOcurred = move(boardSize);
    if (isPlaySound) {
        bubbleSound.load();
        const p = bubbleSound.play();
        p.catch((e) => undefined);
    }

    if (movementOcurred) {
        generateNewTile();
        updateBoardObject({
            boardSize: currentBoardSizeID,
            boardState: tileBoard.innerHTML,
            score: scoreValue.textContent,
            highScore: highScoreValue.textContent,
        });
        if (isGameOver(boardSize)) {
            declareGameOver();
        }
    }
};

export default playGame;
