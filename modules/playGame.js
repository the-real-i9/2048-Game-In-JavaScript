import { currentBoardSizeID } from './currents.js';
import { grabNum } from './gameFuncs.js';
const playGame = (move) => {
    const boardSize = grabNum(currentBoardSizeID);
    const mo = move(boardSize);
    if (mo) console.log('There You Go');
};

export default playGame;
