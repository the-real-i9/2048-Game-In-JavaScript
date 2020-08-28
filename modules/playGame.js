import { currentBoardSizeID } from './currents.js';
import { grabNum } from './gameFuncs.js';
const playGame = (move) => {
    const boardSize = grabNum(currentBoardSizeID);
    const mo = move(boardSize);
};

export default playGame;
